const teamAPlayers = ['A1', 'A2', 'A3', 'A4', 'A5'];
const teamBPlayers = ['B1', 'B2', 'B3', 'B4', 'B5'];
const teamAQRCodeData = ['A1-QR', 'A2-QR', 'A3-QR', 'A4-QR', 'A5-QR'];
const teamBQRCodeData = ['B1-QR', 'B2-QR', 'B3-QR', 'B4-QR', 'B5-QR'];

const teamAQRCodeContainer = document.getElementById('teamA-qr');
const teamBQRCodeContainer = document.getElementById('teamB-qr');
const qrInput = document.getElementById('qrInput');
const scanButton = document.getElementById('scanButton');
const result = document.getElementById('result');

function createQRCodeElements(team, qrCodes) {
    qrCodes.forEach((code, index) => {
        const qrCodeDiv = document.createElement('div');
        qrCodeDiv.className = 'qr-code';
        qrCodeDiv.innerText = code;
        qrCodeDiv.dataset.player = team[index];
        qrCodeDiv.dataset.team = team === teamAPlayers ? 'A' : 'B';
        (team === teamAPlayers ? teamAQRCodeContainer : teamBQRCodeContainer).appendChild(qrCodeDiv);
    });
}

createQRCodeElements(teamAPlayers, teamAQRCodeData);
createQRCodeElements(teamBPlayers, teamBQRCodeData);

scanButton.addEventListener('click', () => {
    const scannedCode = qrInput.value;
    let found = false;

    // Check if the scanned code belongs to the opposing team
    if (teamAQRCodeData.includes(scannedCode)) {
        result.innerText = 'Team B player marked as dead!';
        found = true;
    } else if (teamBQRCodeData.includes(scannedCode)) {
        result.innerText = 'Team A player marked as dead!';
        found = true;
    }

    if (!found) {
        result.innerText = 'Invalid QR Code!';
    }

    qrInput.value = ''; // Clear input after scanning
});
