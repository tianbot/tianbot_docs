import type { HeadConfig } from "vitepress";
import { metaConfig} from "./constants";

export const head: HeadConfig[] = [
    ['link',{ rel: 'icon', href: '/logo.ico'}],
    
    // get picture no referrer， such as aliyun-oss,  the follower code change " <meta name="referrer" content="no-referrer" /> " in .html file
    ['meta', { name:'referrer', content:'no-referrer'}],

    // Microsoft bing record verify
    ['meta', { name:'msvalidate.01', content:'64573C71C3541C3C362B887BACDF3A93' }], 
];