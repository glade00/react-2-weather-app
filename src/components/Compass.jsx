import React from 'react'

// On import les propTypes, comme tout à l'heure
import PropTypes from 'prop-types'

// On importe l'image de la flèche du compas
import arrow from './Compas.png'

/* NOTE :
Quand on importe une image avec Webpack dans la configuration actuelle,
elle assigne URL à la variable. Ainsi, on peut la passer à un attribut 
"src" pour l'afficher par exemple */

// On crée une "map" des directions et de leur référence en degré
const directionMap = {
  N: 0,
  E: 90,
  O: -90,
  S: 180,
  NE: 45,
  NO: -45,
  SE: 135,
  SO: -135
}

// On crée un composant-fonction qui reçoit la direction comme prop
const Compass = ({ direction }) => <span style={{
  height: '1.5rem',
  width: '1.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0px 5px'
}}>
  {/* On utilise l'image importée */}
  <img src={arrow} alt="Compass arrow"
    style={{
      height: '1.5rem',
      // On fait tourner la flèche à l'aide de la direction reçue
      // et de la "map" des directions
      transform: `rotate(${directionMap[direction]}deg`
    }}
  />
</span>

// On déclare nos PropTypes
Compass.propTypes = {
  direction: PropTypes.oneOf([
    'N', 'E', 'O', 'S',
    'NO', 'NE', 'SO', 'SE'
  ])
}

// Et on oublie pas d'exporter notre composant
export default Compass