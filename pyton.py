#step 1
student_name=input("Enter your name: ")
score=float(input("Enter your score:"))
#step 2
if 100<=score>=90:
   grade="A"
   remark="Excellent"
elif score>=75:
   grade="B"
   remark="Very Good" 
elif score>=60:
   grade="C"
   remark="Good"
elif score>=50:
   grade="D"
   remark="Fair"    
else :
   grade="D"
   remark="Poor"
#step 3
print("Student Report")
print(f"Name: {student_name}")
print(f"Score: {score}")
print(f"Grade: {grade}")
print(f"Remark: {remark}")