
 export function dateTimeToString(date){

const fecha = date.split("_")

  const fecha1= fecha[0].split("-")
  const fecha2= fecha[1].split("-")

  

  switch(fecha1[1]){
    case '01':
        fecha1[1]='Ene'
      break
    case '02':
        fecha1[1]='Feb'
      break
    case '03':
        fecha1[1]='Mar'
      break
    case '04':
        fecha1[1]='Abr'
      break
    case '05':
        fecha1[1]='May'
      break
    case '06':
        fecha1[1]='Jun'
      break
      case '07':
        fecha1[1]='Jul'
      break
    case '08':
        fecha1[1]='Ago'
      break
    case '09':
        fecha1[1]='Sep'
      break
    case '10':
        fecha1[1]='Oct'
      break
    case '11':
        fecha1[1]='Nov'
      break
    case '12':
        fecha1[1]='Dec'
      break
  }

  return "15 Jul 2022 - 18:36"
}

