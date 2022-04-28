const Q1 = () => {
  const mContainer = document.getElementById("mousePosition");
  const mSpan = document.createElement("span");
  mContainer.appendChild(mSpan);

  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    // prevent xss atacks by using textContent
    mSpan.textContent = `x: ${x} y: ${y}`;
  });
};

const Q2 = () => {
  const form = document.getElementById("form1");
  const formP = form.parentElement;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Make sure we only get text fields
    const children = form.querySelectorAll("input[type=text]");

    // We could verify this holds
    const name = children[0].value;
    const lname = children[1].value;

    const element = document.createElement("h4");
    // prevent xss atacks by using textContent
    element.textContent = `${name} ${lname}`;

    formP.appendChild(element);
  });
};

//  Q3
const insertRow = () => {
  const table = document.getElementById("sampleTable");

  const rows = table.getElementsByTagName("tr");
  const columns = rows[0].children.length;

  const row = document.createElement("tr");

  for (let i = 1; i <= columns; i++) {
    const td = document.createElement("td");
    // prevent xss atacks by using textContent
    td.textContent = `Row ${rows.length + 1} column ${i}`;
    row.appendChild(td);
  }

  table.appendChild(row);
};

const insertColumn = () => {
  const table = document.getElementById("sampleTable");

  const rows = table.getElementsByTagName("tr");
  const columns = rows[0].children.length;

  for (let i = 0; i < rows.length; i++) {
    const td = document.createElement("td");
    const row = rows[i];
    // prevent xss atacks by using textContent
    td.textContent = `Row ${i + 1} column ${columns + 1}`;

    row.appendChild(td);
  }
};

const changeContent = () => {
  const form = document.getElementById("form2");
  const inputs = form.querySelectorAll("input");

  const r = inputs[0].value;
  const c = inputs[1].value;

  const v = inputs[2].value;

  const rows = document.getElementById("myTable").getElementsByTagName("tr");

  element = rows[r - 1].children[c - 1];
  // prevent xss atacks by using textContent
  element.textContent = v;
};

const changeColor = (v) => {
  const picker = document.getElementById("picker");
  picker.value = v;
};

const generateRandomColor = () => {
  const r = Math.round(Math.random() * 255)
    .toString(16)
    .padStart(2, "0");
  const g = Math.round(Math.random() * 255)
    .toString(16)
    .padStart(2, "0");
  const b = Math.round(Math.random() * 255)
    .toString(16)
    .padStart(2, "0");

  return `#${r}${g}${b}`;
};

const addColor = () => {
  const select = document.getElementById("colorSelect");

  const opt = document.createElement("option");
  opt.textContent = generateRandomColor();
  select.append(opt);

  // select newly created color
  select.selectedIndex = select.children.length - 1;
  select.onchange();
};

const removeColor = () => {
  const select = document.getElementById("colorSelect");

  if (select.childElementCount == 1) {
    return;
  }

  const selectedIndex = select.selectedIndex;
  const opt = select.children[selectedIndex];

  opt.remove();
  select.onchange();
};

const Q5 = () => {
  const select = document.getElementById("colorSelect");

  for (let i = 0; i < 5; i++) {
    const opt = document.createElement("option");
    opt.textContent = generateRandomColor();
    select.append(opt);
  }
};

const randomImage = (element) => {
  const height = Math.round(Math.random() * 300 + 300);
  const width = Math.round(Math.random() * 300 + 300);

  const src = `http://placekitten.com/${width}/${height}`;

  element.src = src;
};

const main = () => {
  // 1.
  Q1();

  // 2.
  Q2();

  Q5();
};
