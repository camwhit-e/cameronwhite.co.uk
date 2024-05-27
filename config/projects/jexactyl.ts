import type { Project } from './index';

export default <Project> {
    title: 'Jexactyl',
    summary: `
        Jexactyl is a Docker control interface used to power game servers and other types of Docker containers.
        It is derived from a project called Pterodactyl, and adds much more functionality and improves the UI.
        This project started in 2020 and has grown to over 400 stars with over 10,000 downloads. It is mainly
        used by SMBs in the server hosting sector to provide an interface to clients.
    `,
    sections: [
        {
            title: 'Billing System',
            imageUrl: 'https://cdn.discordapp.com/attachments/1244753378760986746/1244753389192085524/image.png',
            content: `
                Jexactyl adds a comprehensive billing solution to the Pterodactyl base project,
                which features tight integration with the Stripe and PayPal API in order to
                provide users with a speedy, in-house payment solution - eliminating the need
                for companies to spend hundreds on commerical payment solutions for their services.
            `,
        },
        {},
    ]
};
