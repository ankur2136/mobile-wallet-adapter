export const css = `
.mobile-wallet-adapter-embedded-modal {
    display: flex; /* Use flexbox to center content */
    flex-direction: column;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.mobile-wallet-adapter-embedded-modal-content {
    background: #10141f;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    max-width: 500px;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center children horizontally */
}

.mobile-wallet-adapter-embedded-modal-subtitle {
    color: #D8D8D8;
}

.mobile-wallet-adapter-embedded-modal-close {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 18px;
    right: 18px;
    padding: 12px;
    cursor: pointer;
    background: #1a1f2e;
    border: none;
    border-radius: 50%;
}

.mobile-wallet-adapter-embedded-modal-close:focus-visible {
    outline-color: white;
}

.mobile-wallet-adapter-embedded-modal-close svg {
    fill: #777;
    transition: fill 200ms ease 0s;
}

.mobile-wallet-adapter-embedded-modal-close:hover svg {
    fill: #fff;
}

.icon-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #ddd; /* Placeholder for icon background */
}

/* Modal Title */
.mobile-wallet-adapter-embedded-modal-content h1 {
    color: white;
    font-size: 24px;   
}

.button-group {
    display: flex;
    width: 100%;
    gap: 10px;
}

.connect-btn, .cancel-btn {
    flex: 1;
    padding: 12px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.3s ease;
}

.connect-btn {
    background-color: #007bff;
    color: white;
    border: none;
}

.connect-btn:hover {
    background-color: #0056b3;
}

.cancel-btn {
    background-color: transparent;
    color: #a0a0a0;
    border: 1px solid #a0a0a0;
}

.cancel-btn:hover {
    background-color: rgba(160, 160, 160, 0.1);
}

/* BT Connection Status */

.mobile-wallet-adapter-embedded-modal-connection-status-container {
    margin: 20px 0px 20px 0px;
}

.connection-status {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
}
  
.connection-status p {
    margin-top: 10px;
    color: #a0a0a0;
}
  
.bluetooth-icon, .checkmark-icon {
    width: 48px;
    height: 48px;
}
  
.spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
}
  
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* QR Code */

#mobile-wallet-adapter-embedded-modal-qr-code-container {
    width: 500px;
    height: 500px;
    align-content: center;
}
`;
