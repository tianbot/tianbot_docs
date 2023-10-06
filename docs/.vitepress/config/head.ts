import type { HeadConfig } from "vitepress";
import { metaConfig} from "./constants";

export const head: HeadConfig[] = [
    ['link',{ rel: 'icon', href: '/logo.ico'}],
    
    // get picture no referrer， such as aliyun-oss,  the follower code change " <meta name="referrer" content="no-referrer" /> " in .html file
    ['meta', { name:'referrer', content:'no-referrer'}],
];