// Pictogramas SVG: sustituye automáticamente los emojis del texto por iconos vectoriales.
const P = {
  sword:'<path d="M14 4h6v6L11 19l-3-3z"/><path d="M6 15l-2 5 5-2"/>',
  shield:'<path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z"/>',
  flame:'<path d="M12 3c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3-1-4 0-7 1-10z"/>',
  skull:'<path d="M12 3a8 8 0 0 0-8 8c0 3 2 4 3 5v3h10v-3c1-1 3-2 3-5a8 8 0 0 0-8-8z"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/>',
  heart:'<path d="M12 20C4 15 3 11 3 9a5 5 0 0 1 9-2 5 5 0 0 1 9 2c0 2-1 6-9 11z"/>',
  bolt:'<path d="M13 2L5 14h6l-1 8 8-12h-6z"/>',
  coin:'<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 10h5a2 2 0 0 1 0 4H9"/>',
  bag:'<path d="M7 8h10l2 12H5z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
  eye:'<path d="M2 12c3-6 7-8 10-8s7 2 10 8c-3 6-7 8-10 8s-7-2-10-8z"/><circle cx="12" cy="12" r="3"/>',
  lock:'<rect x="6" y="11" width="12" height="9"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  sound:'<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9a4 4 0 0 1 0 6"/>',
  mute:'<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M17 9l5 6M22 9l-5 6"/>',
  check:'<path d="M4 12l5 5 11-11"/>',
};
const M = { "⚔":"sword","🛡":"shield","🔥":"flame","☠":"skull","❤":"heart","⚡":"bolt","💰":"coin","🎒":"bag","👁":"eye","🔒":"lock","🔊":"sound","🔇":"mute","✔":"check" };
const T = /[⚔🛡🔥☠❤⚡💰🎒👁🔒🔊🔇✔]/u, G = /([⚔🛡🔥☠❤⚡💰🎒👁🔒🔊🔇✔])\uFE0F?/gu, NS = "http://www.w3.org/2000/svg";
function icon(name) {
  const s = document.createElementNS(NS, "svg"), u = document.createElementNS(NS, "use");
  s.setAttribute("class", "ic"); s.setAttribute("aria-hidden", "true"); u.setAttribute("href", "#i-" + name); s.append(u); return s;
}
function convert(root) {
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: (n) => (T.test(n.nodeValue) && n.parentElement && !n.parentElement.closest("script,style,svg,textarea,title,option") ? 1 : 2) });
  const nodes = []; while (w.nextNode()) nodes.push(w.currentNode);
  nodes.forEach((n) => {
    const txt = n.nodeValue, frag = document.createDocumentFragment(); let last = 0;
    for (const m of txt.matchAll(G)) { frag.append(txt.slice(last, m.index)); frag.append(icon(M[m[1]])); last = m.index + m[0].length; }
    frag.append(txt.slice(last)); n.replaceWith(frag);
  });
}
export function initIcons() {
  const sp = document.createElementNS(NS, "svg"); sp.setAttribute("style", "display:none");
  sp.innerHTML = Object.entries(P).map(([k, v]) => `<symbol id="i-${k}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${v}</symbol>`).join("");
  document.body.prepend(sp);
  let queued = false; const obs = new MutationObserver(() => {
    if (queued) return; queued = true;
    requestAnimationFrame(() => { queued = false; obs.disconnect(); convert(document.body); obs.observe(document.body, { childList: true, subtree: true, characterData: true }); });
  });
  convert(document.body); obs.observe(document.body, { childList: true, subtree: true, characterData: true });
}
