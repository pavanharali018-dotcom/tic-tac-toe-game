```python
from datetime import date, timedelta
from pathlib import Path
import json
import urllib.request
import xml.sax.saxutils as xml_escape

# Change this if your GitHub username is different
USERNAME = "pavanharali018-dotcom"

API_URL = f"https://github-contributions-api.jogruber.de/v4/{USERNAME}?y=last"

HEATMAP = Path("assets/contribution-heatmap.svg")
GRAPH = Path("assets/contribution-graph.svg")


def fetch_contributions():
    request = urllib.request.Request(
        API_URL,
        headers={"User-Agent": "GitHub-Contribution-Dashboard"}
    )

    with urllib.request.urlopen(request, timeout=30) as response:
        data = json.load(response)

    contributions = data.get("contributions", [])

    if not contributions:
        raise RuntimeError("No contribution data received.")

    return {
        item["date"]: int(item.get("count", 0))
        for item in contributions
    }


def get_color(count):
    if count == 0:
        return "#161b22"
    if count == 1:
        return "#0e4429"
    if count <= 3:
        return "#006d32"
    if count <= 6:
        return "#26a641"
    return "#39d353"


def generate_heatmap(counts):
    today = date.today()
    start = today - timedelta(days=364)

    # Align calendar to Sunday
    grid_start = start - timedelta(
        days=(start.weekday() + 1) % 7
    )

    days = []
    current = grid_start

    while current <= today:
        days.append(current)
        current += timedelta(days=1)

    cell = 22
    gap = 4
    left = 42
    top = 35

    columns = (len(days) + 6) // 7
    width = left + columns * (cell + gap) + 12
    height = top + 7 * (cell + gap) + 32

    svg = [
        f'<svg xmlns="http://www.w3.org/2000/svg" '
        f'width="{width}" height="{height}" '
        f'viewBox="0 0 {width} {height}">',
        '<rect width="100%" height="100%" rx="12" fill="#0d1117"/>',
        '<text x="18" y="23" fill="#c9d1d9" '
        'font-family="Arial" font-size="14" font-weight="bold">'
        'Daily GitHub Contributions</text>'
    ]

    # Month labels
    previous_month = None

    for column in range(columns):
        current = days[column * 7]

        if current.month != previous_month:
            x = left + column * (cell + gap)

            svg.append(
                f'<text x="{x}" y="{top-9}" fill="#8b949e" '
                f'font-family="Arial" font-size="10">'
                f'{current.strftime("%b")}</text>'
            )

            previous_month = current.month

    # Weekday labels
    for row, label in {0: "Sun", 2: "Tue", 4: "Thu", 6: "Sat"}.items():
        y = top + row * (cell + gap) + 14

        svg.append(
            f'<text x="5" y="{y}" fill="#8b949e" '
            f'font-family="Arial" font-size="9">{label}</text>'
        )

    # Daily squares and counts
    for current in days:
        if current < start or current > today:
            continue

        row = (current.weekday() + 1) % 7
        column = (current - grid_start).days // 7

        count = counts.get(current.isoformat(), 0)

        x = left + column * (cell + gap)
        y = top + row * (cell + gap)

        svg.append(
            f'<rect x="{x}" y="{y}" width="{cell}" '
            f'height="{cell}" rx="3" fill="{get_color(count)}">'
            f'<title>{current.isoformat()}: {count} contributions</title>'
            '</rect>'
        )

        font_size = 10 if count < 10 else 8

        svg.append(
            f'<text x="{x + cell / 2}" y="{y + 14}" '
            f'text-anchor="middle" fill="#ffffff" '
            f'font-family="Arial" font-size="{font_size}" '
            f'font-weight="bold">'
            f'{xml_escape.escape(str(count))}</text>'
        )

    svg.append(
        f'<text x="{left}" y="{height-10}" fill="#8b949e" '
        'font-family="Arial" font-size="10">'
        'Each square shows daily contributions</text>'
    )

    svg.append("</svg>")

    HEATMAP.parent.mkdir(parents=True, exist_ok=True)
    HEATMAP.write_text("\n".join(svg), encoding="utf-8")


def generate_graph(counts):
    today = date.today()
    start = today - timedelta(days=364)

    daily = []
    current = start

    while current <= today:
        daily.append(
            (current, counts.get(current.isoformat(), 0))
        )
        current += timedelta(days=1)

    # Combine each 7-day period into one data point
    weekly = []

    for index in range(0, len(daily), 7):
        period = daily[index:index + 7]

        if period:
            weekly.append(
                (period[0][0], sum(value for _, value in period))
            )

    width = 900
    height = 300
    left, right, top, bottom = 55, 25, 55, 40

    plot_width = width - left - right
    plot_height = height - top - bottom

    maximum = max((value for _, value in weekly), default=0)
    y_max = max(5, ((maximum + 4) // 5) * 5)

    points = []

    for index, (day, value) in enumerate(weekly):
        x = left + index / max(1, len(weekly) - 1) * plot_width
        y = top + plot_height - value / y_max * plot_height

        points.append((x, y, day, value))

    path = " ".join(
        ("M" if index == 0 else "L") + f" {x:.1f} {y:.1f}"
        for index, (x, y, _, _) in enumerate(points)
    )

    area = (
        path
        + f" L {points[-1][0]:.1f} {top + plot_height}"
        + f" L {points[0][0]:.1f} {top + plot_height} Z"
    )

    total = sum(value for _, value in daily)

    svg = [
        f'<svg xmlns="http://www.w3.org/2000/svg" '
        f'width="{width}" height="{height}" '
        f'viewBox="0 0 {width} {height}">',
        '<rect width="100%" height="100%" rx="12" fill="#0d1117"/>',
        '<text x="22" y="25" fill="#c9d1d9" '
        'font-family="Arial" font-size="16" font-weight="bold">'
        'Weekly Contribution Trend</text>',
        f'<text x="{width-right}" y="25" text-anchor="end" '
        'fill="#8b949e" font-family="Arial" font-size="11">'
        f'{total:,} contributions in 365 days</text>'
    ]

    # Grid lines and vertical-axis labels
    step = max(1, y_max // 4)

    for tick in range(0, y_max + 1, step):
        y = top + plot_height - tick / y_max * plot_height

        svg.append(
            f'<line x1="{left}" y1="{y:.1f}" '
            f'x2="{width-right}" y2="{y:.1f}" '
            'stroke="#30363d"/>'
        )

        svg.append(
            f'<text x="{left-10}" y="{y+4:.1f}" '
            'text-anchor="end" fill="#8b949e" '
            f'font-family="Arial" font-size="10">{tick}</text>'
        )

    svg.append(f'<path d="{area}" fill="#238636" opacity="0.22"/>')
    svg.append(
        f'<path d="{path}" fill="none" stroke="#39d353" '
        'stroke-width="2.5" stroke-linejoin="round" '
        'stroke-linecap="round"/>'
    )

    # Add points and hover labels
    for x, y, day, value in points:
        svg.append(
            f'<circle cx="{x:.1f}" cy="{y:.1f}" r="2.5" '
            'fill="#39d353">'
            f'<title>Week of {day.isoformat()}: '
            f'{value} contributions</title></circle>'
        )

    # Date labels
    for index in sorted(set([0, len(points) // 2, len(points) - 1])):
        x, _, day, _ = points[index]

        svg.append(
            f'<text x="{x:.1f}" y="{height-15}" '
            'text-anchor="middle" fill="#8b949e" '
            f'font-family="Arial" font-size="10">'
            f'{day.strftime("%b %Y")}</text>'
        )

    svg.append("</svg>")

    GRAPH.parent.mkdir(parents=True, exist_ok=True)
    GRAPH.write_text("\n".join(svg), encoding="utf-8")


def main():
    print("Fetching GitHub contribution data...")

    counts = fetch_contributions()

    print("Generating daily contribution heatmap...")
    generate_heatmap(counts)

    print("Generating weekly contribution graph...")
    generate_graph(counts)

    print("Done! Check the assets folder.")


if __name__ == "__main__":
    main()
```