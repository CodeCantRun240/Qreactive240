"use client";
// Importing necessary modules
import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { getEmailUser } from '@/components/emailuser';

// Importing styles
import styles from './styles.module.css';

const QRPersonalGenerator = () => {
    const [Email, setEmail] = useState('');
    const [Subject, setSubject] = useState('');
    const [Body, setBody] = useState('');

    const [qrImageUrl, setQrImageUrl] = useState('');
    const [selectedType, setSelectedType] = useState(null);

    const handleTypeSelection = (type) => {
        setSelectedType(type);
    };
    const navigateToQRType = (type) => {
        router.push(`${type}`);
        handleTypeSelection(type);
    };
    // Router instance
    const router = useRouter();

    const generateQr = async () => {
        try {
            const emailUser = getEmailUser();
            // Send the email details to the backend for QR code generation
            const response = await axios.post('http://localhost:5000/email/generate', {
                email: Email,
                subject: Subject,
                content: Body,
                emailUser,
            });

            // Assuming the backend responds with the generated QR code URL
            setQrImageUrl(response.data.qrImageUrl);
        } catch (error) {
            console.error('Error generating QR code:', error);
        }
    };

    return (
        <>
            <Head>
                <title>Email QR Code Generator</title>
                <meta name="description" content="Generate QR code for an email"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.header}>
                {/* Back button */}
                <button className={styles.backButton} onClick={() => router.push("/qr_scanner")}>
                    <img src="/returnBack.png" alt="return Icon" className={styles.icon}/>
                    Back
                </button>
                <div className={styles.headerContent}>
                    <h1>Email QR Code Generator</h1>
                </div>
            </div>
            <div className={styles.container}>
            <div className="flex-row ">
                    <button className={styles.button2} onClick={() => navigateToQRType("qr_link")}>

                        <img src="/link.png" alt="Link Icon" className={styles.icon}/>
                        Link
                    </button>

                    {/* Button to navigate to QR Text page */}
                    <button className={styles.button2} onClick={() => navigateToQRType("qr_text")}>
                        <img src="/text.png" alt="Text Icon" className={styles.icon}/>

                        Text
                    </button>

                    {/* Button to navigate to QR Personal page */}
                    <button className={styles.button2} onClick={() => navigateToQRType("qr_personal")}>
                        <img src="/vcard.png" alt="Vcard Icon" className={styles.icon}/>

                        Vcard
                    </button>

                    {/* Button to navigate to QR Personal Data */}
                    <button className={styles.button2} onClick={() => navigateToQRType("personalData")}>
                        <img src="/person.png" alt="Person Icon" className={styles.icon}/>

                        Custom
                    </button>

                    {/* Button to navigate to QR List page */}
                    <button className={styles.button2} onClick={() => navigateToQRType("qr_wifi")}>
                        <img src="/wifi.png" alt="Wifi Icon" className={styles.icon}/>

                        Wifi
                    </button>
                    <button className={styles.button2} onClick={() => navigateToQRType("qr_email")}>
                        <img src="/mail.png" alt="Mail Icon" className={styles.icon}/>

                        Email
                    </button>

                </div>
                <div className="w-3/4 border-0 border-r-4 flex flex-col items-center bg-#3B3B3B;	">
                    <div className={styles.input_group}>
                        <input
                            type="email"
                            className={styles.input}
                            id="Email"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="Email" className={styles.user_label}>
                            Email
                        </label>
                    </div>

                    <div className={styles.input_group}>
                        <input
                            type="text"
                            className={styles.input}
                            id="Subject"
                            value={Subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                        <label htmlFor="Subject" className={styles.user_label}>
                            Subject
                        </label>
                    </div>

                    <div className={styles.input_group}>
                        <textarea
                            className={styles.input}
                            id="Body"
                            value={Body}
                            onChange={(e) => setBody(e.target.value)}
                            required
                        />
                        <label htmlFor="Body" className={styles.user_label}>
                            Body
                        </label>
                    </div>

                    <div className={styles.button}>
                        <button className={styles.button1} onClick={generateQr}>Generate QR</button>
                    </div>
                    {qrImageUrl && <img src={qrImageUrl} alt="Generated QR Code"/>}
                </div>
            </div>
        </>
    );
};

export default QRPersonalGenerator;
