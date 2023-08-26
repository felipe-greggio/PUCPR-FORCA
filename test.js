const words = ["javascript", "html", "css", "python", "java"];
if (words.includes('javascript')) {
    console.log('Teste concluído com êxito: "javascript" está na lista de palavras.');
} else {
    console.error('Teste falhou, não foi encontrada a palavra escolhida.');
    process.exit(1);
}
