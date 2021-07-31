const inputs = document.querySelectorAll('input')

function handleUpdates() {
  const suffix = this.dataset.sizing || "";
  console.log(this.name);
  console.log(this.value + suffix);
  //document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
  const root = document.styleSheets[0].rules[0].style;
  root.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change',handleUpdates));
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdates));