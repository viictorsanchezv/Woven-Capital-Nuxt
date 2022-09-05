<script>
    import titleH2 from '@/components/TitleH2.vue';
    import CardTeam from '@/components/CardTeam.vue';
    export default {
        data() {
            return {
                teamData: ([
                    { 
                        teamName: "George Kellerman", 
                        teamJob: "Managing Director", 
                        teamEmail: "George@woven.vc", 
                        teamLinkedin: "https://www.linkedin.com/in/georgekellerman/", 
                        teamDesc: 
                            "George is responsible for leading a team of professional investors to identify, invest in, and partner with global technology companies that can support and accelerate Woven Planet’s mission to build the safest mobility in the world."+
                            "Prior to joining Woven Planet, George was one of the founding members of Yamaha Motor Ventures & Laboratory Silicon Valley, Inc., where he initially served as the COO & General Partner for three and half years, before serving as the CEO & Managing Director for one and half years. He also launched the Yamaha Motor Exploratory Fund, a $100M early-stage fund, and he initiated and led Yamaha Motor’s investment and partnership activity in agricultural automation and robotics."+
                            "Before Yamaha, George served as a Managing Partner at 500 Startups, one of the most active early-stage investors in the world. In earlier roles, he served as the Managing Director of Dell Japan’s consumer business, as the VP of International Business Development at Yahoo! JAPAN, and as Corporate Counsel at Yahoo! Inc."+
                            "George received his Juris Doctor degree from the University of California Berkeley School of Law, and a Bachelor of Arts degree in Philosophy from the University of Hawaii at Manoa. He also served as a Firefighter and Rescue Crew Chief in the United States Air Force and as a Combat Medic in the United States Army Reserves. In his free time, George loves to go surfing, sailing and snowboarding whenever he can.",
                        teamImage: "George-Kellerman.png", 
                    },                    
                    {   
                        teamName: "Prashant Kumar Bothra", 
                        teamJob: "Principal", 
                        teamEmail: "prashant@woven.vc", 
                        teamLinkedin: "https://www.linkedin.com/in/prashantkb/", 
                        teamDesc: 
                            "Prashant Kumar Bothra is a principal at Woven Capital focusing on mobility, artificial intelligence, robotics, fintech, and cyber security investments. Prior to Woven Capital, Prashant held executive positions at leading financial institutions across the globe, where his responsibilities included researching, analyzing, identifying, structuring, and executing investment transactions for public and private companies in the Consumer Retail and Technology sectors."+
                            "Most recently, Prashant was the founder of Torii Ventures, an investment management consulting firm based in Dubai. He has also served as Vice President, Technology Venture Capital Investments, at Gulf Islamic Investments, with a focus on enterprise technology, as well as Vice President at Omnia Ventures, focused on Private Equity investments in MENA."+
                            "Previously, Prashant was one of the founding members of the Technology Strategy Group, Equity Research Division, at Credit Suisse. He worked closely with technology sector research teams across the US, Europe and Asia, and led the design and successful implementation of one of the largest and most detailed tech industry forecast models, which includes the Credit Suisse Technology Index."+
                            "He began his career at Goldman Sachs in the Investment Banking Division as a data strategy analyst in the Consumer Retail and Healthcare groups."+
                            "He holds an MBA with a specialization in Finance from the Indian School of Business in Hyderabad and the University of St. Gallen in Switzerland, and a BA in Economics from New York University.",
                        teamImage: "Prashant-Kumar-Bothra.png", 
                    },
                    {   
                        teamName: "Will Fung", 
                        teamJob: "Principal", 
                        teamEmail: "", 
                        teamLinkedin: "", 
                        teamDesc: 
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est libero, blandit sed sed nec porta turpis eleifend. Tellus volutpat pulvinar leo cursus arcu integer consequat. Consectetur congue aenean magna libero viverra etiam pretium sagittis. Facilisi massa tempus elementum pretium. Hendrerit at nulla nisl scelerisque dignissim mattis diam. Et nulla ut dictum in. Vulputate feugiat aenean laoreet faucibus."+
                            "Aenean integer fusce habitant velit id mattis. Nibh non urna libero senectus elit. Laoreet semper eu diam consequat hendrerit adipiscing accumsan, sit. Sed quam suspendisse proin donec. Risus, lorem ornare purus sit. Mauris porttitor tristique facilisis accumsan, ut malesuada diam sem. Iaculis eget tortor hendrerit sit adipiscing gravida. Proin ut eget amet, viverra mi et etiam commodo."+
                            "Amet lectus enim, nulla nisl ut. Est imperdiet tortor sed arcu ut tristique consectetur pharetra. Sed pretium, turpis augue ut nunc nibh varius leo. Fringilla consequat, pellentesque sit feugiat magna venenatis, quis commodo. Sit tortor, cras cursus varius scelerisque."+
                            "Viverra proin sapien, nec non quis. Volutpat dignissim ac, sodales porttitor facilisi. Tellus consectetur diam massa ut nulla eros, lectus at in. Urna placerat id auctor lorem nibh mauris molestie ligula erat. Nulla turpis morbi quis fames faucibus. Quisque orci a orci commodo sagittis. Nunc integer lorem auctor adipiscing. Sed mollis id velit eget fringilla pharetra, eu non."+
                            "Quam ultrices nam orci, sit at sed in egestas. Et phasellus dictum donec faucibus maecenas viverra. Tristique enim, sed a, molestie amet adipiscing vel. Aenean vestibulum, sed senectus nulla feugiat id donec mi. At eget pulvinar integer vitae sagittis euismod tellus. Ac lectus pellentesque cursus varius nunc morbi arcu pellentesque. Volutpat orci blandit ut duis urna pellentesque cursus venenatis. Purus fusce pharetra, porttitor purus pellentesque et volutpat.", 
                        teamImage: "Will-Fung.png", 
                    },
                    {   
                        teamName: "Jarek Khoilian", 
                        teamJob: "Associate", 
                        teamEmail: "", 
                        teamLinkedin: "", 
                        teamDesc: 
                            "Jarek Khoilian is an associate at Woven Capital, responsible for the sourcing and due diligence of investments across a number of verticals."+
                            "Previously, Jarek was a senior associate on CIBC’s Energy, Infrastructure, and Transition team supporting clients on M&A processes across the transportation and digital infrastructure sectors. Additionally, he was previously an analyst at Meridiam Infrastructure, developing and financing large-scale social and transportation infrastructure projects across North America and LATAM."+
                            "Jarek holds a B.S. in Business Administration with a concentration in Finance and a Minor in International Relations from the University of Southern California.", 
                        teamImage: "Jarek-Khoilian.png", 
                    },
                    {   
                        teamName: "Masashi Odawara", 
                        teamJob: "Head-of-Finance", 
                        teamEmail: "", 
                        teamLinkedin: "", 
                        teamDesc: 
                            "As head of Finance for Woven Capital, Masashi “Masa” Odawara brings over 20 years of financial, asset management and information technology experience with firms including Neuberger Berman, Deutsche Bank and BlackRock."+
                            "Prior to joining Woven Capital in 2022, Masa served as Neuberger Berman’s Head of Finance, East Asia, working with the East Asia management team to lead and oversee all Finance functions — covering financial planning and analysis, legal entity controlling and finance operations. Before that, he held various positions at Deutsche Bank in Finance and Treasury in Tokyo, New York and Frankfurt."+
                            "Prior to joining Deutsche Bank in 2012, Masa was at BlackRock, engaged in business finance, corporate strategy, and business development and project delivery in BlackRock Solutions. He started his career at eAccess, a startup that went public in 2003 and was later acquired by SoftBank. Subsequently, in the information technology industry, Masa led several IT and business process reengineering projects as project leader at Infosys."+
                            "Masa received a bachelor’s degree in environmental information from Keio University. He is also a CFA charter holder and a member of the CFA Institute.", 
                        teamImage: "Masashi-Odawara.png", 
                    },
                    {   
                        teamName: "Michiko Kato", 
                        teamJob: "Principal", 
                        teamEmail: "", 
                        teamLinkedin: "", 
                        teamDesc: 
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est libero, blandit sed sed nec porta turpis eleifend. Tellus volutpat pulvinar leo cursus arcu integer consequat. Consectetur congue aenean magna libero viverra etiam pretium sagittis. Facilisi massa tempus elementum pretium. Hendrerit at nulla nisl scelerisque dignissim mattis diam. Et nulla ut dictum in. Vulputate feugiat aenean laoreet faucibus."+
                            "Aenean integer fusce habitant velit id mattis. Nibh non urna libero senectus elit. Laoreet semper eu diam consequat hendrerit adipiscing accumsan, sit. Sed quam suspendisse proin donec. Risus, lorem ornare purus sit. Mauris porttitor tristique facilisis accumsan, ut malesuada diam sem. Iaculis eget tortor hendrerit sit adipiscing gravida. Proin ut eget amet, viverra mi et etiam commodo."+
                            "Amet lectus enim, nulla nisl ut. Est imperdiet tortor sed arcu ut tristique consectetur pharetra. Sed pretium, turpis augue ut nunc nibh varius leo. Fringilla consequat, pellentesque sit feugiat magna venenatis, quis commodo. Sit tortor, cras cursus varius scelerisque."+
                            "Viverra proin sapien, nec non quis. Volutpat dignissim ac, sodales porttitor facilisi. Tellus consectetur diam massa ut nulla eros, lectus at in. Urna placerat id auctor lorem nibh mauris molestie ligula erat. Nulla turpis morbi quis fames faucibus. Quisque orci a orci commodo sagittis. Nunc integer lorem auctor adipiscing. Sed mollis id velit eget fringilla pharetra, eu non."+
                            "Quam ultrices nam orci, sit at sed in egestas. Et phasellus dictum donec faucibus maecenas viverra. Tristique enim, sed a, molestie amet adipiscing vel. Aenean vestibulum, sed senectus nulla feugiat id donec mi. At eget pulvinar integer vitae sagittis euismod tellus. Ac lectus pellentesque cursus varius nunc morbi arcu pellentesque. Volutpat orci blandit ut duis urna pellentesque cursus venenatis. Purus fusce pharetra, porttitor purus pellentesque et volutpat.", 
                        teamImage: "Michiko-Kato.png", 
                    },
                    {   
                        teamName: "Betty Bryant", 
                        teamJob: "Principal", 
                        teamEmail: "", 
                        teamLinkedin: "", 
                        teamDesc: 
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est libero, blandit sed sed nec porta turpis eleifend. Tellus volutpat pulvinar leo cursus arcu integer consequat. Consectetur congue aenean magna libero viverra etiam pretium sagittis. Facilisi massa tempus elementum pretium. Hendrerit at nulla nisl scelerisque dignissim mattis diam. Et nulla ut dictum in. Vulputate feugiat aenean laoreet faucibus."+
                            "Aenean integer fusce habitant velit id mattis. Nibh non urna libero senectus elit. Laoreet semper eu diam consequat hendrerit adipiscing accumsan, sit. Sed quam suspendisse proin donec. Risus, lorem ornare purus sit. Mauris porttitor tristique facilisis accumsan, ut malesuada diam sem. Iaculis eget tortor hendrerit sit adipiscing gravida. Proin ut eget amet, viverra mi et etiam commodo."+
                            "Amet lectus enim, nulla nisl ut. Est imperdiet tortor sed arcu ut tristique consectetur pharetra. Sed pretium, turpis augue ut nunc nibh varius leo. Fringilla consequat, pellentesque sit feugiat magna venenatis, quis commodo. Sit tortor, cras cursus varius scelerisque."+
                            "Viverra proin sapien, nec non quis. Volutpat dignissim ac, sodales porttitor facilisi. Tellus consectetur diam massa ut nulla eros, lectus at in. Urna placerat id auctor lorem nibh mauris molestie ligula erat. Nulla turpis morbi quis fames faucibus. Quisque orci a orci commodo sagittis. Nunc integer lorem auctor adipiscing. Sed mollis id velit eget fringilla pharetra, eu non."+
                            "Quam ultrices nam orci, sit at sed in egestas. Et phasellus dictum donec faucibus maecenas viverra. Tristique enim, sed a, molestie amet adipiscing vel. Aenean vestibulum, sed senectus nulla feugiat id donec mi. At eget pulvinar integer vitae sagittis euismod tellus. Ac lectus pellentesque cursus varius nunc morbi arcu pellentesque. Volutpat orci blandit ut duis urna pellentesque cursus venenatis. Purus fusce pharetra, porttitor purus pellentesque et volutpat.", 
                        teamImage: "Betty-Bryant.png", 
                    },
                    {   
                        teamName: "Alissa Schneideman", 
                        teamJob: "Associate", 
                        teamEmail: "", 
                        teamLinkedin: "", 
                        teamDesc: 
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est libero, blandit sed sed nec porta turpis eleifend. Tellus volutpat pulvinar leo cursus arcu integer consequat. Consectetur congue aenean magna libero viverra etiam pretium sagittis. Facilisi massa tempus elementum pretium. Hendrerit at nulla nisl scelerisque dignissim mattis diam. Et nulla ut dictum in. Vulputate feugiat aenean laoreet faucibus."+
                            "Aenean integer fusce habitant velit id mattis. Nibh non urna libero senectus elit. Laoreet semper eu diam consequat hendrerit adipiscing accumsan, sit. Sed quam suspendisse proin donec. Risus, lorem ornare purus sit. Mauris porttitor tristique facilisis accumsan, ut malesuada diam sem. Iaculis eget tortor hendrerit sit adipiscing gravida. Proin ut eget amet, viverra mi et etiam commodo."+
                            "Amet lectus enim, nulla nisl ut. Est imperdiet tortor sed arcu ut tristique consectetur pharetra. Sed pretium, turpis augue ut nunc nibh varius leo. Fringilla consequat, pellentesque sit feugiat magna venenatis, quis commodo. Sit tortor, cras cursus varius scelerisque."+
                            "Viverra proin sapien, nec non quis. Volutpat dignissim ac, sodales porttitor facilisi. Tellus consectetur diam massa ut nulla eros, lectus at in. Urna placerat id auctor lorem nibh mauris molestie ligula erat. Nulla turpis morbi quis fames faucibus. Quisque orci a orci commodo sagittis. Nunc integer lorem auctor adipiscing. Sed mollis id velit eget fringilla pharetra, eu non."+
                            "Quam ultrices nam orci, sit at sed in egestas. Et phasellus dictum donec faucibus maecenas viverra. Tristique enim, sed a, molestie amet adipiscing vel. Aenean vestibulum, sed senectus nulla feugiat id donec mi. At eget pulvinar integer vitae sagittis euismod tellus. Ac lectus pellentesque cursus varius nunc morbi arcu pellentesque. Volutpat orci blandit ut duis urna pellentesque cursus venenatis. Purus fusce pharetra, porttitor purus pellentesque et volutpat.", 
                        teamImage: "Alissa-Schneideman.png", 
                    },
                    {   
                        teamName: "Max Suzuki", 
                        teamJob: "Partner, Head of Operations", 
                        teamEmail: "", 
                        teamLinkedin: "", 
                        teamDesc: 
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est libero, blandit sed sed nec porta turpis eleifend. Tellus volutpat pulvinar leo cursus arcu integer consequat. Consectetur congue aenean magna libero viverra etiam pretium sagittis. Facilisi massa tempus elementum pretium. Hendrerit at nulla nisl scelerisque dignissim mattis diam. Et nulla ut dictum in. Vulputate feugiat aenean laoreet faucibus."+
                            "Aenean integer fusce habitant velit id mattis. Nibh non urna libero senectus elit. Laoreet semper eu diam consequat hendrerit adipiscing accumsan, sit. Sed quam suspendisse proin donec. Risus, lorem ornare purus sit. Mauris porttitor tristique facilisis accumsan, ut malesuada diam sem. Iaculis eget tortor hendrerit sit adipiscing gravida. Proin ut eget amet, viverra mi et etiam commodo."+
                            "Amet lectus enim, nulla nisl ut. Est imperdiet tortor sed arcu ut tristique consectetur pharetra. Sed pretium, turpis augue ut nunc nibh varius leo. Fringilla consequat, pellentesque sit feugiat magna venenatis, quis commodo. Sit tortor, cras cursus varius scelerisque."+
                            "Viverra proin sapien, nec non quis. Volutpat dignissim ac, sodales porttitor facilisi. Tellus consectetur diam massa ut nulla eros, lectus at in. Urna placerat id auctor lorem nibh mauris molestie ligula erat. Nulla turpis morbi quis fames faucibus. Quisque orci a orci commodo sagittis. Nunc integer lorem auctor adipiscing. Sed mollis id velit eget fringilla pharetra, eu non."+
                            "Quam ultrices nam orci, sit at sed in egestas. Et phasellus dictum donec faucibus maecenas viverra. Tristique enim, sed a, molestie amet adipiscing vel. Aenean vestibulum, sed senectus nulla feugiat id donec mi. At eget pulvinar integer vitae sagittis euismod tellus. Ac lectus pellentesque cursus varius nunc morbi arcu pellentesque. Volutpat orci blandit ut duis urna pellentesque cursus venenatis. Purus fusce pharetra, porttitor purus pellentesque et volutpat.", 
                        teamImage: "Max-Suzuki.png", 
                    },
                    {   
                        teamName: "Daniel Yoo", 
                        teamJob: "Director, Marketing & Communications", 
                        teamEmail: "", 
                        teamLinkedin: "", 
                        teamDesc: 
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est libero, blandit sed sed nec porta turpis eleifend. Tellus volutpat pulvinar leo cursus arcu integer consequat. Consectetur congue aenean magna libero viverra etiam pretium sagittis. Facilisi massa tempus elementum pretium. Hendrerit at nulla nisl scelerisque dignissim mattis diam. Et nulla ut dictum in. Vulputate feugiat aenean laoreet faucibus."+
                            "Aenean integer fusce habitant velit id mattis. Nibh non urna libero senectus elit. Laoreet semper eu diam consequat hendrerit adipiscing accumsan, sit. Sed quam suspendisse proin donec. Risus, lorem ornare purus sit. Mauris porttitor tristique facilisis accumsan, ut malesuada diam sem. Iaculis eget tortor hendrerit sit adipiscing gravida. Proin ut eget amet, viverra mi et etiam commodo."+
                            "Amet lectus enim, nulla nisl ut. Est imperdiet tortor sed arcu ut tristique consectetur pharetra. Sed pretium, turpis augue ut nunc nibh varius leo. Fringilla consequat, pellentesque sit feugiat magna venenatis, quis commodo. Sit tortor, cras cursus varius scelerisque."+
                            "Viverra proin sapien, nec non quis. Volutpat dignissim ac, sodales porttitor facilisi. Tellus consectetur diam massa ut nulla eros, lectus at in. Urna placerat id auctor lorem nibh mauris molestie ligula erat. Nulla turpis morbi quis fames faucibus. Quisque orci a orci commodo sagittis. Nunc integer lorem auctor adipiscing. Sed mollis id velit eget fringilla pharetra, eu non."+
                            "Quam ultrices nam orci, sit at sed in egestas. Et phasellus dictum donec faucibus maecenas viverra. Tristique enim, sed a, molestie amet adipiscing vel. Aenean vestibulum, sed senectus nulla feugiat id donec mi. At eget pulvinar integer vitae sagittis euismod tellus. Ac lectus pellentesque cursus varius nunc morbi arcu pellentesque. Volutpat orci blandit ut duis urna pellentesque cursus venenatis. Purus fusce pharetra, porttitor purus pellentesque et volutpat.", 
                        teamImage: "Daniel-Yoo.png", 
                    },
                    
                ]),
            }
        },
        components:{
            titleH2,
        }
    }
</script>
<template>
    <main>
        <section >
            <div class="p-5rem m-0">
                <div class="row m-0 p-4">
                    <div class="col-md-12 p-0 m-0 align-items-center d-flex flex-column text-center">
                        <title-h2 titleH2="Who we are" class="justify-content-center"></title-h2>
                        <p class="text-24 text-team">We’re a team of investors, innovators, and industry experts passionate about developing the next-generation of life-changing mobility technologies.</p>
                    </div>
                </div>
                <div class="container-team m-0">
                    <card-Team 
                            v-for="(team, index) in teamData" 
                            :key="index"
                            :teamName="team.teamName"
                            :teamJob="team.teamJob"
                            :teamImage="team.teamImage"
                            :teamEmail="team.teamEmail"
                            >
                    </card-Team>
                </div>
            </div>
        </section>
    </main>
</template>
<style scoped>
    .text-team{
        color: var( --color--secondary );
        width: 80%;
    }
    
</style>
