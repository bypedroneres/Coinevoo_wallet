const bitgoApiUrl = "https://www.bitgo.com/api/v2/";
const bitgoApiToken = "your-api-token-here";

const walletId = "your-wallet-id-or-address-here";

function updateBalance(balance) {
    const balanceElement = document.getElementById("balance-amount");
    balanceElement.textContent = `$${balance.toFixed(2)}`;
}

fetch(`${bitgoApiUrl}wallet/${walletId}/balance`, {
    headers: {
        "Authorization": `Bearer ${bitgoApiToken}`,
    },
})
.then(response => response.json())
.then(data => {
    const balance = data.balance / 100000000; 
    updateBalance(balance);
})
.catch(error => {
    console.error("Error fetching balance:", error);
});
