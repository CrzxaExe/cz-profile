class Formater {
  static name(text) {
    return text
      .split(/-| |_/g)
      .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
      .join(" ");
  }
}

export { Formater };
