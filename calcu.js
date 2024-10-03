const displayContent=(content)=>{

    output.value+=content
}
const showoutput=()=>{

 try{
  console.log("try block");
  
    output.value=eval(output.value)
  }
  catch{
    console.log("catch block");
    
    output.value=""
  output.placeholder="invalid expresion!!"
  }
  finally{
    console.log("finaly block task complete!!");
    
  }
}

clearAll=()=>{
    output.value=""
    output.value="0"
}
remove=()=>{
  output.value=output.value.slice(0,-1)
}