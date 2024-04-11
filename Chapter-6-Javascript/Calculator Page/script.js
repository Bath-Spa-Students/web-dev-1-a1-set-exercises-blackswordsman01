document.getElementById('calculate').addEventListener('click', function() {
    const cost = parseFloat(document.getElementById('cost').value);
    const litres = parseFloat(document.getElementById('liters').value);
    const totalCost = cost * liters;
    document.getElementById('total-cost').textContent = `Total cost: $${totalCost.toFixed(2)}`;
});
