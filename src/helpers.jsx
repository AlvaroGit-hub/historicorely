
export function dateTimeToString(date){
  const months=["Ene","Feb","Mar","Abr","May","Jun", "Jul","Ago", "Sep","Oct","Nov","Dic"]
  // Fecha y hora en formato ISO-8601
  let fecha_y_hora = date;
  // Crear un objeto Date con la fecha y hora
  let newFecha = new Date(fecha_y_hora);
  // Obtener la fecha en formato día, mes y año
  let fecha_string = newFecha.toLocaleDateString();
  // Separamos la fecha en un array
  const fechaArray= fecha_string.split("/")
  let day=fechaArray[0]
  let month= months[fechaArray[1]-1]
  let year= fechaArray[2]
   // Obtener la hora en formato de 24 horas
  let hora_string = newFecha.toLocaleTimeString('es-ES', {hour12: false});
   // Combinar la fecha y hora en una sola cadena
  let fecha_y_hora_string = `${day} ${month} ${year} ${hora_string}`

  return fecha_y_hora_string
}

