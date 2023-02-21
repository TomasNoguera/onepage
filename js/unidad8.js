function recomendaciones() {
    
    var mostrar = confirm("¿Estas listo/a para conocer las recomendaciones y organizar tu viaje de la mejor forma posible?")
    var contenido = document.getElementById("mostrar_recomendaciones")
    
    if (mostrar) {
        contenido.style.display = "block"
    }
}