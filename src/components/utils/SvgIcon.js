import React from 'react';

/**
 * Composant générique pour afficher des icônes SVG
 * 
 * @param {Object} props - Propriétés du composant
 * @param {React.ReactNode} props.children - Contenu SVG (chemins, etc.)
 * @param {string} [props.width="24"] - Largeur de l'icône
 * @param {string} [props.height="24"] - Hauteur de l'icône
 * @param {string} [props.viewBox="0 0 24 24"] - Propriété viewBox du SVG
 * @param {string} [props.fill="none"] - Couleur de remplissage par défaut
 * @param {string} [props.className=""] - Classes CSS supplémentaires
 * @param {string} [props.color] - Couleur principale (surcharge fill sur les éléments enfants)
 * @param {string} [props.secondaryColor] - Couleur secondaire pour les éléments avec opacity
 * @param {string} [props.ariaLabel] - Description pour l'accessibilité
 */
const SvgIcon = ({
  children,
  width = "24",
  height = "24",
  viewBox = "0 0 24 24",
  fill = "none",
  className = "",
  color,
  secondaryColor,
  ariaLabel,
  ...props
}) => {
  // Appliquer les couleurs dynamiquement aux enfants si nécessaire
  const childrenWithProps = color || secondaryColor
    ? React.Children.map(children, child => {
        if (!React.isValidElement(child)) return child;
        
        // Appliquer les couleurs selon les attributs existants
        const newProps = {};
        
        if (color && child.props.fill !== 'none' && !child.props.stroke) {
          newProps.fill = color;
        }
        
        if (color && child.props.stroke) {
          newProps.stroke = color;
        }
        
        if (secondaryColor && 
            (child.props.fillOpacity || 
             child.props.opacity || 
             child.props['fill-opacity'])) {
          newProps.fill = secondaryColor;
        }
        
        return React.cloneElement(child, newProps);
      })
    : children;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      className={className}
      aria-hidden={!ariaLabel}
      aria-label={ariaLabel}
      {...props}
    >
      {childrenWithProps}
    </svg>
  );
};

export default SvgIcon;
