import './style.css'
import { homeBtnEventListener, experienceBtnEventListener } from './eventListeners'
import { renderHomeTags } from './renderTags';

renderHomeTags()
homeBtnEventListener();
experienceBtnEventListener()

//problema de donde se va a hacer el render
//tengo los tags en el html, pero se elimina cada vez que pico el boton
//soluciones: eliminar el contenido dentro de las section
//crear las section en algun punto de la funcion

//otra solucion es que el boton le cambie la clase a la section y se suben ahi el nuevo contenido

//falta hacer las fabricas de trabajos y de proyectos (un modulo)
//otro modulo donde van a crearse los objetos 
// los objetos se suben a array
//el array es iterado para crear los objetos
//esta iteracion es lo que va a ser invocado por el eventlistener 
//agregar imagenes y contenido
//agregar estilos


