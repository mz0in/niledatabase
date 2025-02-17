'use client';

import './globals.css'
import styles from './page.module.css'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Stack from '@mui/joy/Stack';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
const inter = Inter({ subsets: ['latin'] })
import { usePathname } from 'next/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
        <div style={{display: 'flex', flexDirection:'column', width:'100%'}}>
        <div className={styles.description}>
        <div>
        <Image src="/java.svg" alt="Java Logo" className={styles.logo} width={49.125} height={60}/>
        </div>
        <Typography level="h2">Yet Another Todo Application</Typography>
        <div>
          <a
            href="https://thenile.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by{'    '}
            <Image src="/nile_logo.svg" alt="Nile Logo" className={styles.logo} height={24} width={100} />
          </a>
        </div>
      </div>
      {
      pathname === "/" ? null : 
            <div className={styles.logout}>
              <Link href="/?logout" style={{color:"black"}}>[ Logout ]</Link>
            </div>
      }
      </div>
      <div>
      </div>
          {children}
          <div className={styles.grid}>
        <Card variant="outlined"
              sx={{
                '--card-padding': '1rem',
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
              }}>
          <Link overlay href="https://niledatabase-www.vercel.app/docs/getting-started/languages/java" target="_blank" rel="noopener">
          <Image src="/java.svg" alt="Java Logo" className={styles.logo} width={49.125} height={60}/>
            </Link>
          <CardContent>
            <Typography>Getting started guide</Typography>
          </CardContent>
        </Card>

        <Card variant="outlined"
              sx={{
                '--card-padding': '1rem',
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
              }}>
          <Link overlay href="https://thenile.dev"  target="_blank" rel="noopener">
            <Image src="/nile_logo.svg" alt="Nile Logo" className={styles.logo} height={24} width={100}/>
            </Link>
          <CardContent>
            <Typography>Sign up to Nile</Typography>
          </CardContent>
        </Card>

        <Card variant="outlined"
              sx={{
                '--card-padding': '1rem',
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
              }}>
          <Link overlay href="https://niledatabase-www.vercel.app/templates"  target="_blank" rel="noopener">
            <Image src="/nile_logo.svg" alt="Nile Logo" className={styles.logo} height={24} width={100} />
            </Link>
          <CardContent>
            <Typography>Try additional templates</Typography>
          </CardContent>
        </Card>
      </div>
        </main>
      </body>
    </html>
  )
}
