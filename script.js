var letter = [
  {
    name: "alpha",
    symbol: "Α α",
  },
  {
    name: "Beta",
    symbol: "Β β"
  },
  {
    name: "Gamma",
    symbol: "Γ γ"
  },
  {
    name: "Delta",
    symbol: "Δ δ"
  },
  {
    name: "Epsilon",
    symbol: "Ε ε"
  },
  {
    name: "Zeta",
    symbol: "Ζ ζ"
  },
  {
    name: "Eta",
    symbol: "Η η"
  },
  {
    name: "Theta",
    symbol: "Θ θ"
  },
  {
    name: "Iota",
    symbol: "Ι ι"
  },
  {
    name: "Kappa",
    symbol: "Κ κ"
  },
  {
    name: "Lambda",
    symbol: "Λ λ"
  },
  {
    name: "Mu",
    symbol: "Μ μ"
  },
  {
    name: "Nu",
    symbol: "Ν ν"
  },
  {
    name: "Xi",
    symbol: "Ξ ξ"
  },
  {
    name: "Omicron",
    symbol: "Ο ο"
  },
  {
    name: "Phi",
    symbol: "Π π"
  },
  {
    name: "Ro",
    symbol: "Ρ ρ"
  },
  {
    name: "Sigma",
    symbol: "Σ σ"
  },
  {
    name: "Tau",
    symbol: "Τ τ"
  },
  {
    name: "Upsilon",
    symbol: "Υ υ"
  },
  {
    name: "Phi",
    symbol: "Φ φ"
  },
  {
    name: "Chi",
    symbol: "Χ χ"
  },
  {
    name: "Psi",
    symbol: "Ψ ψ"
  },
  {
    name: "Omega",
    symbol: "Ω ω"
  }
]   

function randomLetter() {
  rand = letter[Math.floor(Math.random() * letter.length)].symbol;        document.getElementById("letter").textContent=rand;
  };

var button = document.getElementsByTagName("button");
for (var i = 0; i < button.length; i++){
    button[i].onclick = function(){
      var id = this.id 
      if (id == rand) {
        alert("You got it!!") }
        else {alert("Too bad!")}
    };
    
}
