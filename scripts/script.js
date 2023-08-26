import { currencyConverter1 } from "./curren_convert1.js";
import { articleConverter1 } from "./article_convert1.js";
import { displayDoughnut } from "./doughnut.js"
import { displayChart1 } from "./chart1.js";
import { displayChart2 } from "./chart2.js";
import { dataTable } from "./mindicador.js";

async function currencyData1() {
  let url = `https://api.gael.cloud/general/public/monedas/`;
  const data = await currencyConverter1(url);
  let codUSD = data[1].Codigo;
  let valUSD = data[1].Valor;
  let codEUR = data[26].Codigo;
  let valEUR = data[26].Valor;
  let codJPY = data[58].Codigo;
  let valJPY = data[58].Valor;
  let codBRL = data[46].Codigo;
  let valBRL = data[46].Valor;
  let codARS = data[37].Codigo;
  let valARS = data[37].Valor;
  let codPEN = data[36].Codigo;
  let valPEN = data[36].Valor;
  let codVEF = data[5].Codigo;
  let valVEF = data[5].Valor;
  let codIDR = data[52].Codigo;
  let valIDR = data[52].Valor;
  let codKRW = data[57].Codigo;
  let valKRW = data[57].Valor;
  let codMXN = data[42].Codigo;
  let valMXN = data[42].Valor;
  const a = document.createElement("p");
  a.style.color = '#d4d4d4';
  a.innerHTML = `$ <b>${valUSD}</b> <br> ${codUSD}`;
  document.getElementById(`${codUSD}`).appendChild(a);
  const b = document.createElement("p");
  b.style.color = '#d4d4d4';
  b.innerHTML = `$ <b>${valEUR}</b> <br> ${codEUR}`;
  document.getElementById(`${codEUR}`).appendChild(b);
  const c = document.createElement("p");
  c.style.color = '#d4d4d4';
  c.innerHTML = `$ <b>${valJPY}</b> <br> ${codJPY}`;
  document.getElementById(`${codJPY}`).appendChild(c);
  const d = document.createElement("p");
  d.style.color = '#d4d4d4';
  d.innerHTML = `$ <b>${valBRL}</b> <br> ${codBRL}`;
  document.getElementById(`${codBRL}`).appendChild(d);
  const e = document.createElement("p");
  e.style.color = '#d4d4d4';
  e.innerHTML = `$ <b>${valARS}</b> <br> ${codARS}`;
  document.getElementById(`${codARS}`).appendChild(e);
  const f = document.createElement("p");
  f.style.color = '#d4d4d4';
  f.innerHTML = `$ <b>${valPEN}</b> <br> ${codPEN}`;
  document.getElementById(`${codPEN}`).appendChild(f);
  const g = document.createElement("p");
  g.style.color = '#d4d4d4';
  g.innerHTML = `$ <b>${valVEF}</b> <br> ${codVEF}`;
  document.getElementById(`${codVEF}`).appendChild(g);
  const h = document.createElement("p");
  h.style.color = '#d4d4d4';
  h.innerHTML = `$ <b>${valIDR}</b> <br> ${codIDR}`;
  document.getElementById(`${codIDR}`).appendChild(h);
  const i = document.createElement("p");
  i.style.color = '#d4d4d4';
  i.innerHTML = `$ <b>${valKRW}</b> <br> ${codKRW}`;
  document.getElementById(`${codKRW}`).appendChild(i);
  const j = document.createElement("p");
  j.style.color = '#d4d4d4';
  j.innerHTML = `$ <b>${valMXN}</b> <br> ${codMXN}`;
  document.getElementById(`${codMXN}`).appendChild(j);
}
currencyData1();

let articlepair2 = ['1171307', '1168740', '1167924'];
articlepair2.forEach(idarticle => {
  async function articleData1() {
    let url = `https://ms-finance.p.rapidapi.com/articles/get-details?id=${idarticle}`;
    const data = await articleConverter1(url);
    const a = document.createElement("p");
    a.style.color = 'rgba(59, 59, 59, 0.726)';
    a.style.fontSize = '16px';
    a.innerHTML = `<b>${data.title}</b> <br> <p style="color:#d4d4d4;">${data.deck}</p>`;
    document.getElementById(`${idarticle}`).appendChild(a);
  }
  articleData1();
});

async function dataTable1() {
  let url = `https://mindicador.cl/api`;
  const data = await dataTable(url);
  let nom1 = data.uf.nombre;
  let val1 = data.uf.valor;
  let nom2 = data.tasa_desempleo.nombre;
  let val2 = data.tasa_desempleo.valor;
  let nom3 = data.imacec.nombre;
  let val3 = data.imacec.valor;
  let nom4 = data.tpm.nombre;
  let val4 = data.tpm.valor;
  let nom5 = data.ipc.nombre;
  let val5 = data.ipc.valor;
  const a = document.createElement("p");
  a.style.color = '#d4d4d4';
  a.innerHTML = `<p>${nom1}</p>`;
  document.getElementById(`table_r1c1`).appendChild(a);
  const b = document.createElement("p");
  b.style.color = '#d4d4d4';
  b.innerHTML = `<p>$${val1}</p>`;
  document.getElementById(`table_r1c2`).appendChild(b);
  const c = document.createElement("p");
  c.style.color = '#d4d4d4';
  c.innerHTML = `<p>${nom2}</p>`;
  document.getElementById(`table_r2c1`).appendChild(c);
  const d = document.createElement("p");
  d.style.color = '#d4d4d4';
  d.innerHTML = `<p>${val2}%</p>`;
  document.getElementById(`table_r2c2`).appendChild(d);
  const e = document.createElement("p");
  e.style.color = '#d4d4d4';
  e.innerHTML = `<p>${nom3}</p>`;
  document.getElementById(`table_r3c1`).appendChild(e);
  const f = document.createElement("p");
  f.style.color = '#d4d4d4';
  f.innerHTML = `<p>${val3}%</p>`;
  document.getElementById(`table_r3c2`).appendChild(f);
  const g = document.createElement("p");
  g.style.color = '#d4d4d4';
  g.innerHTML = `<p>${nom4}</p>`;
  document.getElementById(`table_r4c1`).appendChild(g);
  const h = document.createElement("p");
  h.style.color = '#d4d4d4';
  h.innerHTML = `<p>${val4}%</p>`;
  document.getElementById(`table_r4c2`).appendChild(h);
  const i = document.createElement("p");
  i.style.color = '#d4d4d4';
  i.innerHTML = `<p>${nom5}</p>`;
  document.getElementById(`table_r5c1`).appendChild(i);
  const j = document.createElement("p");
  j.style.color = '#d4d4d4';
  j.innerHTML = `<p>${val5}%</p>`;
  document.getElementById(`table_r5c2`).appendChild(j);
}
dataTable1();
displayChart1();
displayChart2();
displayDoughnut();