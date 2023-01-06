const root = document.getElementById("root");
const url = "https://www.swapi.tech/api/people/";
for (i = 1; i <= 10; i++) {
  axios.get(url + i).then(({ data }) => {
    const info = data.result;
    const description = document.createElement("h2");
    const properties = document.createElement("div");
    const birthYear = document.createElement("h4");
    const eyeColor = document.createElement("h4");
    const gender = document.createElement("h4");
    const hairColor = document.createElement("h4");
    const height = document.createElement("h4");
    const name = document.createElement("h4");
    description.textContent = info.description;
    birthYear.textContent = `Birth Year: ${info.properties.birth_year}`;
    eyeColor.textContent = `Eye color: ${info.properties.eye_color}`;
    gender.textContent = `Gender: ${info.properties.gender}`;
    hairColor.textContent = `Hair Color: ${info.properties.hair_color}`;
    height.textContent = `Height: ${info.properties.height}`;
    name.textContent = `Name: ${info.properties.name}`;

    root.append(description, properties);
    properties.append(name, birthYear, eyeColor, gender, hairColor, height);
  });
}
