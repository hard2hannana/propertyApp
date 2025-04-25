// Import property data
import propertyForSaleArr from '/properties/propertyForSaleArr.js';
import placeholderPropertyObj from '/properties/placeholderPropertyObj.js';

export default function getPropertyHtml(properties = [placeholderPropertyObj]) {
  return properties.map(property => {
    const { image,propertyLocation, priceGBP, comment, roomsM2 } = property;

    const roomSize = roomsM2.reduce((total, size) => total + size, 0);

    return `
      <section class="card">
        <img src="/images/${image}" />
        <div class="card-right">
          <h2>${propertyLocation}</h2>
          <h3>£${priceGBP}</h3>
          <p>${comment}</p>
          <h3>${roomSize}m&sup2;</h3>
        </div>
      </section>
    `;
  }).join('');
}

// Render to DOM
document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr);
