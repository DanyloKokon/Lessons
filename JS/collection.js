const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
  ];

//   const option = `<button style="backgroundColor:${color}" class="btn">${label}</button>`

  const createOption = (cpos) => {
   return cpos.map((cpO) => {
        return `<button style="background-color:${cpO.color}" class="btn">${cpO.label}</button>`
    })
  }
document.querySelector(".js-color-picker").insertAdjacentHTML("beforeend", createOption(colorPickerOptions))