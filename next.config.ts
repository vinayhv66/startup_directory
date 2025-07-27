import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
            },
            {
                protocol: 'https',
                hostname: 'in.images.search.yahoo.com',
            },
            {
                protocol: 'https',
                hostname: 'www.eluniverso.com',
            },
            {
                protocol: 'https',
                hostname: 'cloudfront-us-east-1.images.arcpublishing.com',
            }
        ]
    },

    
    devIndicators:{
        appIsrStatus:true,
        buildActivity:true,
        buildActivityPosition:"bottom-right"

    }
};

export default nextConfig;
