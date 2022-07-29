
//https://api.nationalize.io/?name[]=michael
async function nameData(event){
    event.preventDefault()
    var product = document.getElementById('text1').value
    console.log(product)
    let data = await fetch(`https://api.nationalize.io/?name[]=${product}`)
    let res = await data.json()
    

    //console.log(res)
    data1=(res[0].country[0].country_id)
    data2=(res[0].country[1].country_id)

    data3=(res[0].country[0].probability)
    data4=(res[0].country[1].probability)

 //console.log(data1,data2)
 var input=document.getElementById('cont')
 input.innerHTML=`
 <ul class="list-group"><mark class="text-white bg-dark"> Name: ${product}</mark>
 <li class="list-group-item list-group-item-primary">country id 1:${data1}</li>
 <li class="list-group-item list-group-item-secondary">probability percentage:${data3}%</li>
 <li class="list-group-item list-group-item-primary">country id 2:${data2}</li>
 <li class="list-group-item list-group-item-secondary">probability percentage:${data4}%</li>
 </ul>                                             
 `
 
    
  }


