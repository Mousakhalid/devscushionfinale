// /data/contentData.ts

export interface ContentItem {
    id: number;
    icon: string;
    heading: string;
    description: string;
}

export const contentData: ContentItem[] = [
    {
        id: 1,
        icon: '/cloud-team.png', // Path to the icon image
        heading: 'Cloud Team',
        description: 'Efficiently manage & optimize cloud infrastructure, including containerization, storage, databases, networking & more, to ensure the distribution of traffic, enabling seamless scalability and reliability for deployment.'
    },
    {
        id: 2,
        icon: '/cloud-services.png', // Path to the icon image
        heading: 'Cloud Services',
        description: 'Integrate seamless automation and increase scalability for software development, testing, and deployment by leveraging the cloud services to streamline the DevOps pipeline to increase the organization’s efficiency.'
    },
    {
        id: 3,
        icon: '/microservices.png', // Path to the icon image
        heading: 'Microservices',
        description: 'Simplify your development, testing, and deployment process with the microservices architecture tailor-made for DevOps with a service-based approach-allowing businesses to break down complex apps into small services.'
    },
    {
        id: 4,
        icon: '/serverless.png', // Path to the icon image
        heading: 'Serverless',
        description: 'Serverless services allow your Devops teams to work across a variety of locations and environments with minimum impact on others, also enabling DevOps to release updates and patches and automate infrastructure tasks.'
    },
    {
        id: 5,
        icon: '/process-automation.png', // Path to the icon image
        heading: 'Process Automation',
        description: 'Make your enterprise more effecient by automating your deployment processes. Our robust Agile methadology ensures a signifiecient time reduction in software production & deployment also deminishing associated risks'
    },
    {
        id: 6,
        icon: '/application-integration.png', // Path to the icon image
        heading: 'Application Integration',
        description: 'Let us plan your application integration compatible tools, standarized data formats, full-fledged testing, and security plans. We monitor,update & scale integrations to avoid vendor lock-in & to foster collection.'
    },
    {
        id: 7,
        icon: '/infrastructure-automation.png', // Path to the icon image
        heading: 'Infrastructure Automation',
        description: 'Swiflty deploy your software and effeciently manage the workload of your team with DevOps tools for infrastructure automation providing seamless automation of workflow needed to streamline & lower manual intervention.'
    },
    {
        id: 8,
        icon: '/ci-cd.png', // Path to the icon image
        heading: 'Continous Integration and Deployment (CI/CD)',
        description: 'Elevate the software development process with continuous integration (CI) and continous delivery (CD), essential to DevOps & Agile networks. We bridge the gap between continous integration, testing & deployment.'
    },
    {
        id: 9,
        icon: '/monitoring.png', // Path to the icon image
        heading: 'Monitoring and Logging',
        description: 'Detect anomalies, get insights into system performance, and track the health of solutions to enable proactive decision-making, & keep a record of the whole development process with effecient monitoring and logging services.'
    },
    {
        id: 10,
        icon: '/containerization.png', // Path to the icon image
        heading: 'Containerization and Orchestration',
        description: 'Deploy an app on any computer enviroment, whether on-premises or cloud with DevOps containerization. It involves placing a software component, its environment, dependencies & configuration into a container.'
    },
    {
        id: 11,
        icon: '/cloud-infrastructure.png', // Path to the icon image
        heading: 'Cloud Infrastructure Management',
        description: 'Have a robust infrastructure that can adapt to the growth & speed of your business with our DevOps infrastructure management services, in which we use a mature cloud DevOps framework that collaborates configuration management & infrastructure automation.'
    },
    {
        id: 12,
        icon: '/security.png', // Path to the icon image
        heading: 'Security and Compliance',
        description: 'Automation, focus on testing, instant feedback, enhanced visibility & collaboration, consistent releases are the soul of our DevOps practices which are key in embedding security & compliance.'
    },
];
