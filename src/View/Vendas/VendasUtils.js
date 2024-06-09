export const calculateTotalVendas = (vendas) => {
    return vendas.reduce((total, venda) => {
        const valor = venda.valor || 0;
        return total + valor;
    }, 0);
}
