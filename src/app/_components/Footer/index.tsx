import React from 'react'
import Link from 'next/link'

import { Footer } from '../../../payload/payload-types'
import { fetchFooter, fetchGlobals } from '../../_api/fetchGlobals'
import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'
import { Gutter } from '../Gutter'
import { CMSLink } from '../Link'
import GitHubIcon from '@mui/icons-material/GitHub';

import classes from './index.module.scss'
// import tailwind.css 
import '../../_css/tailwind.css'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the footer without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  const navItems = footer?.navItems || []

  return (
    <footer className={classes.footer}>
      <Gutter className={classes.wrap}>
        <Link href="/">
          <picture>
            <img
              className={classes.logo}
              alt="Company Logo"
              src="./company-logo.png"
            />
          </picture>
        </Link>
        <p className="font-extralight place-items-center">Final project for Scott Manley 2024 CSCV 337 SP 24</p>
        <nav className={classes.nav}>
          <ThemeSelector />
          {navItems.map(({ link }, i) => {
            return <CMSLink key={i} {...link} />
          })}
          <Link href="/admin">Admin</Link>
          <Link
            href="https://github.com/scottdavort/e-commerce/tree/main"
            target="_blank"
            rel="noopener noreferrer"
          >
           <GitHubIcon /> Github Source Code
          </Link>

        </nav>
      </Gutter>
    </footer>
  )
}
