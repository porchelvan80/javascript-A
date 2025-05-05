var sid=parseInt(prompt("enter the id"));
       var sname=prompt("enter the name")
       var m1=parseInt(prompt("enter the m1"));
       var m2=parseInt(prompt("enter the m2"));
       var m3=parseInt(prompt("enter the m3"));
       var m4=parseInt(prompt("enter the m4"));
       var m5=parseInt(prompt("enter the m5"));
       var total=m1+m2+m3+m4+m5;
       var percentage=(total*100/500.0);
       document.write("Student Id="+sid+"<br>");
       document.write("Student Name="+sname+"<br>");
       document.write("total="+total+"<br>");
       document.write("percentage="+percentage+"<br>");
       if(percentage>90)
       {
        alert("Grade A")
       }
       else if(percentage>80)
        {
            alert("Grade B")
        }
       else if(percentage>70)
        {
            alert("Grade C")
        }
        else if (percentage>60)
        {
            alert("Grade D")
        }
        else if(percentage>50)
        {
            alert("Grade E")
        }
       
       else
       {
        alert("faile")
       }
        