// Replace with your actual BitGo API URL and API token
const bitgoApiUrl = "https://www.bitgo.com/api/v2/";
const bitgoApiToken = "your-api-token-here";

// Replace with your actual wallet ID or address
const walletId = "your-wallet-id-or-address-here";

// Function to update the balance in HTML
function updateBalance(balance) {
    const balanceElement = document.getElementById("balance-amount");
    balanceElement.textContent = `$${balance.toFixed(2)}`;
}

// Fetch the wallet balance from BitGo API
fetch(`${bitgoApiUrl}wallet/${walletId}/balance`, {
    headers: {
        "Authorization": `Bearer ${bitgoApiToken}`,
    },
})
.then(response => response.json())
.then(data => {
    // Extract the balance from the API response
    const balance = data.balance / 100000000; // Convert Satoshis to BTC
    updateBalance(balance);
})
.catch(error => {
    console.error("Error fetching balance:", error);
});
