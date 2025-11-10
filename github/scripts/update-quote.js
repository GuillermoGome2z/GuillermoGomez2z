const fs = require('fs');

const quotes = [
  {
    text: "💻 El código limpio es el arte de la simplicidad",
    emoji: "🎨",
    color: "7C3AED"
  },
  {
    text: "🚀 Cada error es una lección, cada commit es un logro",
    emoji: "💪",
    color: "FF6B6B"
  },
  {
    text: "⚡ La mejor forma de predecir el futuro es construirlo con código",
    emoji: "🔮",
    color: "4ECDC4"
  },
  {
    text: "✨ No cuentes los días, haz que los días cuenten",
    emoji: "📅",
    color: "FFE66D"
  },
  {
    text: "🎯 Transforma problemas en soluciones, ideas en realidad",
    emoji: "💡",
    color: "A8E6CF"
  },
  {
    text: "🌟 El código perfecto no existe, pero el progreso sí",
    emoji: "📈",
    color: "FF8B94"
  },
  {
    text: "💪 Aprende como si fueras a vivir para siempre",
    emoji: "📚",
    color: "95E1D3"
  },
  {
    text: "🔥 La pasión es el combustible del código brillante",
    emoji: "⚡",
    color: "F38181"
  },
  {
    text: "🎨 Cada línea de código es un trazo en tu obra maestra",
    emoji: "🖌️",
    color: "B4A7D6"
  },
  {
    text: "🌈 La programación es el lenguaje del futuro",
    emoji: "🚀",
    color: "FFB6C1"
  }
];

// Seleccionar frase aleatoria
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);

// Codificar el texto para URL (reemplazar espacios y caracteres especiales)
const encodedText = encodeURIComponent(randomQuote.text);

const quoteSection = `## 💡 Frase Motivacional del Día

<div align="center">

<table>
<tr>
<td align="center" style="padding: 20px;">

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=22&duration=3000&pause=1000&color=${randomQuote.color}&center=true&vCenter=true&width=700&height=100&lines=${encodedText}" alt="Motivational Quote" />

<br>

<img src="https://img.shields.io/badge/Última_actualización-${timestamp.replace(' ', '_').replace(':', '%3A')}-${randomQuote.color}?style=for-the-badge&logo=github&logoColor=white" alt="Last Updated" />

<br><br>

<sub>${randomQuote.emoji} Esta frase cambia automáticamente cada 6 horas ${randomQuote.emoji}</sub>

</td>
</tr>
</table>

</div>`;

// Leer README actual
let readme = fs.readFileSync('README.md', 'utf8');

// Marcadores para encontrar la sección
const startMarker = '## 💡 Frase Motivacional';
const endMarker = '---\n\n## 📚'; // La siguiente sección después de las frases

const startIndex = readme.indexOf(startMarker);
const endIndex = readme.indexOf(endMarker, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  readme = readme.substring(0, startIndex) + quoteSection + '\n\n' + readme.substring(endIndex);
  fs.writeFileSync('README.md', readme);
  console.log('✅ Quote updated successfully!');
  console.log(`📝 New quote: ${randomQuote.text}`);
  console.log(`🎨 Color: #${randomQuote.color}`);
  console.log(`⏰ Timestamp: ${timestamp}`);
} else {
  console.log('❌ Could not find quote section markers in README.md');
  console.log('Make sure your README has the section: ## 💡 Frase Motivacional');
}
