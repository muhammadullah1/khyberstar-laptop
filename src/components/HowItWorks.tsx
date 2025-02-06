import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { WrenchIcon, DatabaseIcon, DownloadIcon, RocketIcon,ShieldIcon, LockIcon } from "../components/Icons";


interface FeatureProps {
  icon: JSX.Element
  title: string
  description: string
}


const features: FeatureProps[] = [
  {
    title: "Laptop Repair & Maintenance",
    description:
      "We diagnose and fix hardware and software issues, including screen replacement, keyboard repair, and system optimization.",
    icon: <WrenchIcon />,
  },
  {
    title: "Data Recovery & Backup",
    description:
      "Recover lost data from damaged or corrupted drives and set up secure backups to protect your important files.",
    icon: <DatabaseIcon />,
  },
  {
    title: "Software Installation & Updates",
    description:
      "Get genuine software installed, including operating systems, antivirus, and productivity tools, with regular updates.",
    icon: <DownloadIcon />,
  },
  {
    title: "Laptop Upgrades",
    description:
      "Enhance your laptop’s performance with RAM, SSD, and battery upgrades to boost speed and efficiency.",
    icon: <RocketIcon />,
  },
  {
    title: "Facebook & WhatsApp Account Recovery",
    description:
      "Recover lost or hacked Facebook and WhatsApp accounts with secure and verified methods to regain access quickly.",
    icon: <ShieldIcon />,
  },
  {
    title: "Ethical Hacking & Cybersecurity",
    description:
      "Protect your digital assets with penetration testing, vulnerability assessments, and cybersecurity solutions.",
    icon: <LockIcon />,
  },
];

export const HowItWorks = () => {
  return (
    <section id='howItWorks' className='container text-center py-24 sm:py-32'>
      <h2 className='text-3xl md:text-4xl font-bold py-10'>
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          Our Services{' '}
        </span>
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className='bg-muted/50'>
            <CardHeader>
              <CardTitle className='grid gap-4 place-items-center'>
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
