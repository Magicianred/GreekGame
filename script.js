var letter = ["Α α", "Β β", "Γ γ", "Δ δ", "Ε ε", "Ζ ζ", "Η η", "Θ θ", "Ι ι", "Κ κ", "Λ λ", "Μ μ", "Ν ν", "Ξ ξ", "Ο ο", "Π π", "Ρ ρ", "Σ σ", "Τ τ", "Υ υ", "Φ φ", "Χ χ", "Ψ ψ", "Ω ω"];

function randomLetter() {
  rand = letter[Math.floor(Math.random() * letter.length)];
  document.getElementById("letter").textContent=rand;
  };