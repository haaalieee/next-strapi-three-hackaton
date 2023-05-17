export type Model = {
    id: string,
    attributes: {
        name: string,
        description: string,
        slug: string,
        file: {
            data: {
                attributes: {
                    url: string
                }
            }
        },
        featured: boolean,
        thumbnail: {
            data: {
                attributes: {
                    formats: {
                        large: {
                            url: string
                        }
                    },
                    url: string
                }
            }
        }
        qrcode: {
            data: {
                attributes: {
                    url: string
                }
            }
        }
    },
}