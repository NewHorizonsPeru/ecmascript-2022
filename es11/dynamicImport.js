/** FORMA TRADICIONAL **/
// import { SalesService } from './SalesService';

// const saveSales = document.getElementById('save-sales');
// saveSales.addEventListener('click', () => {
//   SalesService.Save();
// });

/** IMPORTACIONES DINAMICAS **/
const saveSales = document.getElementById('save-sales');

saveSales.addEventListener('click', async () => {
  const salesService = await import('/SalesService');
  salesService.Save();
});
