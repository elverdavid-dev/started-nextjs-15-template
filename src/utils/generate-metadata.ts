import type { Metadata } from 'next'

interface Props {
	title: string
	description?: string
	canonicalUrl?: string
	ogImg?: string
	category?: string
}

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL as string
const siteName = 'La Fabrica LTD'
const descriptionDefault = ''

export const generateMetadata = ({
	title,
	description,
	ogImg,
	canonicalUrl,
}: Props): Metadata => {
	return {
		title: `${title} | La Fabrica LTD`,
		description: description ?? descriptionDefault,
		metadataBase: new URL(siteUrl),
		alternates: {
			canonical: `${siteUrl}${canonicalUrl ?? ''}`,
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
			},
		},
		openGraph: {
			title: {
				template: '%s | La Fabrica LTD',
				default: 'La Fabrica LTD',
			},
			description: description ?? descriptionDefault,
			url: `${siteUrl}/${canonicalUrl}`,
			siteName,
			images: [
				{
					url: ogImg ?? '/og-image.png',
				},
			],
			locale: 'en',
			type: 'website',
		},
		twitter: {
			card: 'summary',
			title: `${title} | La Fabrica LTD`,
			description: description ?? descriptionDefault,
			images: [ogImg ?? '/og-image.png'],
		},
		keywords: [],
	}
}
