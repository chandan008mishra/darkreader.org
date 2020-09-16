// @ts-check

import {
    createHTMLElement as html,
} from './utils.js';

const url = 'https://opencollective.com/darkreader';

const htmlText = `
<a class="donate-button" href="${url}">
    <svg class="donate-button__image" viewBox="0 0 1024 512" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient x1="163.9" y1="185.3" x2="163.8" y2="224.9" id="gradient51" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="rgb(200,55,55)" />
                <stop offset="100%" stop-color="rgb(215,155,102)" />
            </linearGradient>
            <linearGradient x1="287.3" y1="176.9" x2="287.6" y2="214.6" id="gradient52" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="rgb(200,55,55)" />
                <stop offset="100%" stop-color="rgb(215,155,102)" />
            </linearGradient>
        </defs>
        <g>
            <path d="M201.2,226.2 C249.0,225.5 295.0,236.6 323.9,266.9 C350.7,294.9 360.4,334.6 345.9,366.3 C331.0,398.7 291.6,417.3 247.5,423.8 C206.4,429.9 163.8,423.9 127.3,405.3 C110.5,396.7 95.3,385.5 83.3,371.5 C62.3,347.1 51.5,316.8 60.3,290.9 C74.4,249.4 133.6,227.0 201.2,226.2 Z"
                fill="rgb(20,30,36)" />
            <path d="M268.5,252.2 C278.1,244.1 294.4,245.0 309.3,252.2 C324.0,259.4 335.4,271.9 337.5,286.8 C339.1,298.1 335.1,310.2 337.5,320.2 C341.6,336.9 363.2,346.5 366.8,361.0 C370.5,376.0 358.8,392.5 340.6,396.6 C317.4,401.8 291.8,382.5 275.8,351.6 C268.5,337.5 264.2,321.9 261.5,305.7 C257.9,283.3 257.3,262.0 268.5,252.2 Z"
                fill="rgb(20,30,36)" />
        </g>
        <g>
            <path d="M88.1,141.5 C86.5,112.3 96.4,85.5 114.1,64.4 C138.8,35.2 175.0,19.5 212.7,21.1 C252.7,22.8 288.7,44.1 304.0,75.4 C311.5,90.9 313.1,108.2 313,126 C312.9,141.7 311.3,157.4 308,173 C309.1,186.4 308.7,199.8 306.8,213.1 C303.9,234.7 297.9,255.3 284.7,270.3 C272.8,283.8 255.9,292.2 237.5,296.1 C217.8,300.3 197.3,299.1 178,293 C164.2,288.6 151.3,281.8 140,272.9 C131.6,266.3 124.3,258.7 118,250 C107.5,235.6 99.9,218.4 94.1,200.5 C87.7,198.8 82.2,195.3 78.1,190.5 C73.5,185.2 70.8,178.5 70.1,171.5 C69.3,163.9 70.7,156.4 75.0,150.5 C78.1,146.1 82.6,142.9 88.1,141.5 Z"
                fill="rgb(215,155,102)" />
            <path d="M208.8,266.0 C214.4,266.3 219.9,266.3 225.5,266.0 C231.0,265.7 236.6,265.1 242.1,264.2 C237.3,268.7 231.6,271.3 225.5,271.5 C219.5,271.8 213.8,269.9 208.8,266.0 Z"
                fill="rgb(199,111,76)" />
            <path d="M164.4,287.6 C150.7,274.1 141.4,257.5 136.7,239.6 C131.1,218.2 132.1,195.5 138.6,173.1 C130.8,158.0 127.5,141.5 127.5,125.1 C127.5,105.8 132.8,86.7 142.3,69.7 C148.8,58.1 157.1,48.0 155.3,44.2 C152.5,38.2 133.3,44.4 115,63 C96.0,82.2 87.8,110.2 88.1,141.5 C82.8,142.6 78.3,145.5 75.1,149.5 C70.6,155.0 68.7,162.3 69.1,169.6 C69.5,178.3 73.0,186.4 79.1,192.5 C83.1,196.6 88.1,199.6 94,201 C97.8,214.0 103.1,226.4 110,238 C117.0,249.9 125.6,260.9 136,270 C144.4,277.3 153.9,283.3 164.4,287.6 Z"
                fill="rgb(199,111,76)" />
            <path d="M124,60.4 L133.2,88.0 C135.7,82.0 140.5,77.6 146.1,75.1 C153.1,72.0 161.5,72.4 170.1,71.4 C186.3,69.6 203.7,63.8 220.0,56.7 C216.8,65.0 211.9,72.3 205.2,77.0 C200.4,80.4 194.7,82.4 188.6,82.5 C207.4,83.9 225.8,81.9 242.1,75.1 C253.5,70.4 263.7,63.4 272,54 C275.7,55.1 279.3,56.4 283,58 C288.5,60.3 294.0,63.0 299.4,65.9 C290.9,53.1 279.3,43.3 266.1,36.3 C244.9,25.2 220.1,21.8 196.0,25.3 C169.4,29.1 145.0,41.5 124,60.4 Z"
                fill="rgb(199,111,76)" />
            <path d="M191,256 C202.6,256.6 214.3,256.6 226,256 C235.0,255.4 244.0,254.5 253,253 C254.9,252.8 256.5,253.6 256.6,254.8 C256.7,255.7 255.9,256.4 254.7,256.6 C245.8,258.2 236.8,259.1 227.8,259.6 C216.2,260.3 204.5,260.3 192.8,259.6 C190.8,259.8 189.2,259.0 189.1,257.8 C189.0,256.9 189.8,256.2 191,256 Z"
                fill="rgb(131,62,62)" />
            <path d="M81,157.8 C82.5,154.8 85.4,153.5 88.3,154.1 C93.3,154.9 97.2,160.4 97.6,167.0 C98.0,174.2 94.7,179.8 90.2,179.9 C86.4,180.0 83.6,176.3 84.6,172.5 C85.1,170.9 86.5,169.4 88.3,168.8 C89.5,168.4 90.8,168.3 92.0,168.8 C92.3,166.1 91.7,163.5 90.2,161.4 C88.8,159.6 86.9,158.3 84.6,157.8 C83.4,157.5 82.2,157.4 81,157.8 Z"
                fill="rgb(131,62,62)" />
            <path d="M153.5,80.6 C171.2,82.2 188.2,79.6 201.5,71.4 C210.6,65.7 217.8,57.6 221.8,47.3 C212.0,56.0 200.8,62.4 188.6,65.8 C177.9,68.8 166.6,69.6 155.4,67.7 C161.6,65.7 167.3,62.7 172.0,58.4 C175.9,54.9 179.1,50.5 181.2,45.5 C170.9,53.1 159.7,59.1 148.0,62.1 C140.1,64.2 132.1,64.9 124.0,64.0 C117.9,68.9 112.9,74.8 108.5,81.5 C100.4,93.9 94.8,109.2 90.8,124.9 L88.9,124.9 C86.0,99.6 93.5,76.1 109,58 C128.8,34.6 159.5,22.4 192.3,19.7 C225.1,16.9 258.9,25.3 280.8,42.5 C289.9,49.5 296.9,57.8 301.1,68.3 L299.3,70.2 C294.0,63.5 287.9,57.6 281.0,53.0 C276.0,49.6 270.4,47.0 264.5,45.3 C258.3,58.9 247.9,69.1 234.7,75.7 C212.5,86.9 183.2,87.3 153.5,80.6 Z"
                fill="rgb(195,144,78)" />
            <path d="M285.2,171.2 C287.6,175.4 285.7,180.9 280.3,183.9 C276.9,183.1 273.4,182.7 270,183 C266.7,183.1 263.5,183.8 260.5,184.9 C255.0,182.8 252.8,177.7 254.6,173.3 C256.3,169.0 262.3,166.7 268.8,166.1 C276.0,165.4 282.8,166.8 285.2,171.2 Z"
                fill="rgb(255,255,255)" />
            <path d="M196.3,174.8 C199.2,179.2 198.0,184.9 193.1,188.4 C189.3,186.3 185.1,185.4 181,186 C177.4,186.4 174.0,187.9 171.2,190.5 C166.2,187.2 164.6,181.6 167.0,176.9 C169.3,172.3 175.2,169.9 181.6,169.6 C187.8,169.3 193.6,170.8 196.3,174.8 Z"
                fill="rgb(255,255,255)" />
            <path d="M269.6,162.6 C277.2,162.5 284.1,166.0 289.2,172.4 L277.9,168.5 C278.4,177.7 274.1,184.8 267.9,184.8 C262.3,184.8 258.0,178.8 258.2,170.7 L247.6,174.8 C253.3,167.2 261.1,162.7 269.6,162.6 Z"
                fill="rgb(20,30,36)" />
            <path d="M182.7,166.3 C190.5,166.0 197.8,169.3 203.3,175.5 L191.1,172.7 C191.0,182.6 186.0,189.8 179.6,189.4 C173.8,189.1 169.7,182.8 170.3,174.4 L160.8,178.5 C166.5,171.1 174.2,166.6 182.7,166.3 Z"
                fill="rgb(20,30,36)" />
            <path d="M158.4,159.2 C164.4,156.1 170.8,153.7 177.4,152.2 C183.9,150.7 190.6,150.1 197.4,150.4 C198.1,149.4 198.4,148.3 198.4,147.2 C198.3,145.8 197.5,144.5 196.4,143.4 C188.5,141.5 180.7,141.8 173.4,144.4 C166.4,146.8 160.2,151.2 155.4,157.2 C155.4,158.1 155.7,158.8 156.4,159.2 C157.0,159.6 157.7,159.6 158.4,159.2 Z"
                fill="rgb(195,144,78)" />
            <path d="M261.0,148.2 C259.2,147.3 258.1,145.9 258.0,144.2 C257.8,142.6 258.6,141.2 260.0,140.2 C266.3,138.8 272.7,138.5 279.0,139.7 C284.6,140.7 290.1,142.9 295.0,146.2 C295.5,147.3 295.5,148.4 295.0,149.2 C294.5,149.8 293.8,150.2 293.0,150.2 C288.0,148.9 283.0,148.0 278.0,147.7 C272.3,147.3 266.6,147.5 261.0,148.2 Z"
                fill="rgb(195,144,78)" />
            <path d="M245.8,216.2 C240.4,218.3 234.8,219.7 229.1,219.8 C224.8,220.0 220.4,219.4 216.2,218.0 C218.1,223.3 222.2,226.6 227.3,227.2 C234.4,228.1 241.0,223.6 245.8,216.2 Z"
                fill="rgb(199,111,76)" />
        </g>
        <g>
            <path d="M325.2,262.3 C362.4,276.2 387.3,303.0 387.9,330.6 C388.3,346.7 379.3,362.1 373.2,378.6 C364.3,402.5 360.5,427.8 347.3,447.0 C329.1,473.6 294.8,487.3 258.7,489.4 C217.5,491.8 177.5,478.3 155.3,450.6 C142.7,434.9 136.8,415.0 129.4,395.3 C120.9,372.3 110.9,350.4 114.7,330.6 C118.3,311.3 133.5,295.8 155.3,291.9 C171.8,312.5 193.8,325.6 218.1,328.8 C240.4,331.7 263.2,326.2 282.7,314.0 C301.8,302.1 316.6,284.3 325.2,262.3 Z"
                fill="rgb(49,110,125)" />
            <path d="M330.5,279.4 C349.4,283.1 363.3,296.3 369.2,312.7 C376.2,331.8 371.4,354.1 360.0,373.6 C339.7,408.3 301.6,429.2 260.3,430.8 C215.1,432.6 174.3,409.6 144.0,369.9 C158.2,370.0 172.2,368.0 185.6,363.6 C197.9,359.6 209.5,353.7 220.1,345.8 L224.5,360.0 L272.7,353.3 L272.9,330.0 C284.6,325.4 295.2,318.9 304.6,310.8 C314.9,302.0 323.5,291.4 330.5,279.4 Z"
                fill="rgb(20,30,36)" />
            <path d="M304.9,350.9 C314.4,350.8 321.9,356.0 321.5,362.0 C321.1,367.7 313.7,371.9 304.9,371.3 C296.3,370.7 289.6,365.7 290.1,360.2 C290.5,355.0 297.0,351.1 304.9,350.9 Z"
                fill="rgb(195,144,78)" />
            <path d="M327.0,349.1 C320.8,354.1 314.0,358.0 306.7,360.2 C301.3,361.8 295.7,362.5 290.1,362.0 L303.0,391.6 C312.0,391.0 320.9,389.4 328.9,386.0 C334.2,383.8 339.3,380.7 343.6,376.8 C340.2,372.7 337.1,368.4 334.4,363.9 C331.6,359.2 329.1,354.2 327.0,349.1 Z"
                fill="rgb(37,145,105)" />
            <path d="M258.7,360.2 L229.1,365.7 C228.4,372.3 229.7,378.7 232.8,384.2 C236.5,390.6 242.3,395.6 249.5,398.9 L273.5,393.4 C267.7,388.0 263.0,381.8 260.5,374.9 C258.8,370.2 258.1,365.2 258.7,360.2 Z"
                fill="rgb(37,145,105)" />
            <path d="M234.7,349.1 C237.3,358.6 240.2,368.2 243.9,376.8 C245.6,380.6 247.4,384.3 249.5,387.9 L221.8,398.9 C215.4,394.6 210.4,388.9 207.0,382.3 C203.2,375.0 201.4,366.9 201.5,358.3 L234.7,349.1 Z"
                fill="rgb(148,177,114)" />
            <path d="M256.8,349.1 L286.4,336.2 C290.5,344.7 295.5,352.7 301.2,360.2 C307.7,368.9 315.2,376.9 323.3,384.2 L288.2,398.9 C279.8,389.7 272.1,379.9 266.1,369.4 C262.3,362.9 259.2,356.2 256.8,349.1 Z"
                fill="rgb(148,177,114)" />
            <path d="M288.2,362.0 C295.8,362.3 302.3,365.1 303.0,369.4 C303.8,374.1 297.9,378.9 290.1,380.5 C278.6,382.7 269.3,377.6 269.8,371.3 C270.2,365.9 278.3,361.7 288.2,362.0 Z"
                fill="rgb(37,145,105)" />
            <path d="M194.1,362.0 L208.8,389.7 C204.9,394.4 199.7,397.4 194.1,398.9 C186.4,401.0 178.1,400.1 170.1,397.1 L153.4,373.1 C161.0,373.9 168.5,373.3 175.6,371.3 C182.2,369.4 188.5,366.3 194.1,362.0 Z"
                fill="rgb(37,145,105)" />
            <path d="M205.1,376.8 C214.1,377.6 220.8,382.7 219.9,387.9 C219.1,392.4 211.8,395.3 203.3,395.3 C194.9,395.2 187.7,392.3 186.7,387.9 C185.3,381.8 193.8,375.8 205.1,376.8 Z"
                fill="rgb(195,144,78)" />
            <path d="M268.0,374.5 C276.1,371.6 284.1,373.3 286.5,378.2 C289.8,384.9 283.1,393.7 271.7,394.9 C264.6,395.6 258.0,392.6 257.0,387.5 C256.0,382.5 260.9,377.1 268.0,374.5 Z"
                fill="rgb(195,144,78)" />
            <path d="M373.2,334.3 C372.4,347.6 366.2,359.0 356.6,367.6 C340.8,381.5 315.7,386.8 290.1,389.7 C266.6,392.4 243.1,392.8 219.9,389.7 C203.3,387.5 186.9,383.6 171.9,376.8 C161.1,371.9 150.9,365.7 141.9,357.9 C143.1,376.3 146.3,394.4 151.6,411.9 C157.4,431.2 165.2,449.6 179.3,461.7 C198.7,478.5 228.4,482.5 258.7,480.2 C285.4,478.1 310.9,471.3 327.0,454.3 C339.9,440.8 345.9,421.2 354.7,402.6 C363.8,383.5 375.6,365.3 376.9,350.9 C377.4,344.7 376.3,339.2 373.2,334.3 Z"
                fill="rgb(49,110,125)" />
            <path d="M384.2,350.9 C380.4,365.8 374.8,380.1 367.6,393.4 C361.7,404.4 355.2,414.4 345.5,423.0 C324.3,441.6 289.4,452.8 255.0,452.5 C233.3,452.3 211.8,448.5 190.4,443.3 C172.2,438.8 155.8,433.8 151.6,439.6 C149.3,442.8 150.9,448.7 155.3,454.3 C150.0,449.8 145.8,444.2 142.4,437.7 C136.0,425.7 132.6,410.1 127.6,395.3 C122.0,378.8 114.3,362.8 112.8,349.1 C112.1,342.5 112.6,336.5 114.7,330.6 C113.7,336.3 114.5,341.9 116.5,347.2 C119.6,355.5 126.0,362.9 133.1,369.4 C142.3,377.7 152.5,384.5 164.5,389.7 C190.1,400.8 222.7,404.5 255.0,404.5 C277.6,404.5 300.0,402.8 321.5,397.1 C339.6,392.3 357.3,384.7 369.5,373.1 C376.1,366.8 381.3,359.6 384.2,350.9 Z"
                fill="rgb(20,30,36)" />
            <path d="M149.8,308.5 L164.3,373.1 C140.9,364.2 125.7,348.4 127.6,330.6 C128.8,318.9 137.2,310.8 149.8,308.5 Z"
                fill="rgb(20,30,36)" />
        </g>
        <g>
            <path d="M357.0,429.0 C360.2,431.8 361.6,436.9 360.7,441.9 C359.4,449.3 353.8,454.6 347.8,454.8 C344.6,454.9 341.7,453.6 340.4,451.1 C338.6,447.9 340.1,443.0 342.2,438.2 C344.7,432.7 347.8,427.8 351.5,427.1 C353.4,426.7 355.4,427.5 357.0,429.0 Z"
                fill="rgb(139,188,199)" />
            <path d="M366.4,408.7 C368.9,410.0 371.1,411.8 372.0,414.2 C373.5,418.4 370.8,424.1 366.4,429.0 C363.7,431.9 360.6,434.3 357.2,434.5 C354.2,434.7 351.3,433.3 349.8,430.8 C347.7,427.2 349.3,421.6 351.7,416.0 C353.6,411.7 355.8,407.7 359.0,406.8 C361.3,406.2 364.0,407.2 366.4,408.7 Z"
                fill="rgb(139,188,199)" />
            <path d="M369.3,385.7 C365.9,389.2 361.7,391.9 359.0,395.7 C356.0,400.1 355.0,405.1 357.2,408.7 C359.3,411.9 363.8,413.3 368.3,412.3 C373.0,411.3 376.9,407.8 379.4,403.1 C382.3,397.6 382.7,391.0 381.2,384.6 C380.4,381.1 378.9,377.7 376.7,374.6 C375.1,378.8 372.4,382.5 369.3,385.7 Z"
                fill="rgb(139,188,199)" />
            <path d="M97.7,272.2 C102.3,272.8 106.7,275.0 109.9,278.3 C113.4,282.0 115.6,286.8 116.0,292.1 C109.5,295.7 103.8,300.3 99.2,305.8 C95.2,310.8 92.0,316.5 90.1,322.7 C85.6,323.4 81.3,322.1 77.8,319.6 C72.2,315.6 68.9,308.6 68.7,301.3 C68.4,292.5 72.4,284.1 79.4,278.4 C84.7,274.0 91.2,271.5 97.7,272.2 Z"
                fill="rgb(49,110,125)" />
            <path d="M118.9,271.1 C121.4,284.2 119.4,300.1 115.7,315.0 C113.0,325.9 109.4,336.6 111.5,345.9 C114.2,357.8 126.3,367.2 131.9,379.1 C141.2,399.4 134.2,421.2 116.5,428.5 C103.4,433.9 86.0,428.0 70.4,417.4 C56.0,407.7 44.4,394.5 38.3,378.8 C30.7,359.1 32.2,336.6 40.4,316.0 C47.3,298.7 58.9,283.5 73.9,272.1 C85.2,263.5 98.3,257.3 112.6,254.3 C115.9,259.4 117.7,265.0 118.9,271.1 Z"
                fill="rgb(20,30,36)" />
            <path d="M69.7,274.2 C61.3,287.0 54.5,300.6 49.8,315.0 C45.1,329.6 42.2,344.7 44.5,358.9 C46.1,368.8 50.0,378.1 55.1,386.8 C60.0,395.4 65.8,403.4 73.5,409.0 C83.7,416.2 96.8,419.2 110.4,418.2 C109.1,424.1 104.8,428.1 99.4,429.3 C90.7,431.2 80.0,425.5 69.8,418.2 C62.3,412.8 55.3,406.8 49.5,399.7 C41.0,389.4 35.1,377.2 33.1,364.2 C31.8,356.2 32.0,348.1 33.1,340.1 C34.9,326.8 39.0,314.0 45.6,302.4 C51.7,291.6 59.8,282.1 69.7,274.2 Z"
                fill="rgb(49,110,125)" />
            <path d="M120.0,382.3 C125.5,382.2 130.4,384.9 133.0,389.7 C138.0,399.1 132.9,415.1 123.7,430.3 C121.5,434.0 119.2,437.5 116.0,439.6 C110.1,443.4 102.4,442.6 97.5,437.7 C90.9,431.2 91.3,418.7 96.0,406.3 C101.2,392.9 110.5,382.7 120.0,382.3 Z"
                fill="rgb(139,188,199)" />
            <path d="M144.2,387.9 C148.8,394.8 155.3,399.9 162.7,402.6 C171.0,405.7 180.0,405.6 183.0,410.0 C185.1,413.2 184.3,417.9 181.1,421.1 C177.8,424.5 172.2,425.2 166.4,424.8 C163.2,424.6 160.1,424.0 157.1,423.0 C159.9,425.3 163.0,427.1 166.4,428.5 C173.1,431.2 180.3,432.0 183.0,435.9 C186.4,440.7 184.1,447.7 177.5,450.6 C173.8,452.3 169.2,451.8 164.5,450.6 C160.0,449.5 155.7,447.6 151.6,445.1 C154.5,449.8 158.1,453.7 162.7,456.2 C166.5,458.3 170.9,459.2 171.9,461.7 C172.9,464.1 171.4,467.2 168.2,469.1 C162.4,472.5 152.4,469.9 142.4,465.4 C128.5,459.3 116.4,450.5 111.0,439.6 C108.1,433.7 107.3,427.5 107.3,421.1 C107.2,404.3 113.2,387.9 123.9,376.8 C128.9,371.6 134.4,368.0 140.5,367.6 C147.4,367.1 153.1,370.5 153.4,374.9 C153.7,377.4 151.8,379.9 149.8,382.3 C148.1,384.3 146.2,386.2 144.2,387.9 Z"
                fill="rgb(139,188,199)" />
            <path d="M116.5,389.7 C114.6,395.1 113.4,400.7 112.8,406.3 C112.1,414.4 112.5,422.6 114.7,430.3 C115.9,434.8 117.6,439.1 120.2,443.3 C125.8,452.1 135.6,460.2 146.1,467.3 C139.4,465.2 133.2,462.0 127.6,458.0 C121.2,453.5 115.7,447.8 111.0,441.4 C108.5,442.2 106.0,442.0 103.6,441.4 C99.7,440.4 96.4,437.9 94.4,434.0 C90.2,426.1 92.3,413.5 98.1,400.8 C96.2,405.1 95.4,409.6 96.2,413.7 C96.8,416.5 98.0,419.1 99.9,421.1 C101.4,422.7 103.3,424.0 105.4,424.8 C105.2,422.3 105.2,419.9 105.4,417.4 C105.9,412.4 107.2,407.4 109.1,402.6 C111.0,398.0 113.5,393.7 116.5,389.7 Z"
                fill="rgb(49,110,125)" />
        </g>
        <g>
            <path d="M209.9,149.0 C214.0,146.9 218.4,145.7 222.9,145.3 C229.3,144.7 235.9,145.6 242.3,147.6 C255.2,128.8 276.0,121.3 296.2,125.1 C321.8,130.0 340.4,150.8 342.1,175.8 C344.0,203.3 325.5,227.7 297.8,233.0 C278.2,236.7 257.6,229.1 244.4,212.5 C236.8,202.9 232.5,190.9 233.9,178.0 C232.2,177.0 230.3,176.6 228.4,176.7 C226.4,176.8 224.6,177.4 222.9,178.5 C226.0,199.0 218.5,217.6 204.4,230.2 C186.7,246.1 161.7,250.3 139.8,241.3 C120.4,233.3 106.1,215.8 102.8,195.1 C99.7,175.7 106.9,155.6 121.3,141.6 C135.6,127.7 155.5,121.3 174.9,125.0 C189.0,127.7 201.8,135.8 209.9,149.0 Z"
                fill="rgb(200,55,55)" opacity="0.2" />
            <path d="M208.1,154.5 C213.2,151.4 218.9,149.5 224.7,149.0 C231.3,148.3 238.0,149.4 244.4,151.8 C255.2,133.9 273.9,126.3 292.5,128.8 C318.4,132.2 337.4,152.7 338.4,177.6 C339.5,203.0 321.8,225.2 296.0,229.3 C278.0,232.2 259.2,224.7 247.5,209.3 C240.1,199.5 236.3,187.0 238.7,173.9 C235.5,172.0 232.0,171.0 228.4,171.1 C224.5,171.2 220.7,172.5 217.3,174.8 C221.4,195.1 214.6,213.9 200.7,226.5 C185.1,240.6 163.0,245.0 143.5,237.6 C125.2,230.7 111.7,214.5 108.4,195.1 C105.3,177.0 111.6,158.2 125.0,145.3 C137.7,133.0 155.6,127.5 173.0,130.5 C187.2,133.0 200.0,141.2 208.1,154.5 Z"
                fill="rgb(200,55,55)" opacity="0.2" />
            <path d="M291.3,133.1 C315.7,135.0 334.7,156.0 333.7,181.1 C332.8,204.5 314.5,223.6 291.3,225.5 C265.4,227.5 243.4,208.2 241.4,183.0 C239.1,154.2 262.5,130.8 291.3,133.1 Z"
                fill="rgb(255,255,255)" />
            <path d="M163.8,136.0 C192.1,136.0 214.7,159.2 213.6,187.7 C212.6,214.4 190.7,235.8 163.8,235.8 C136.9,235.8 114.9,214.4 113.9,187.7 C112.9,159.2 135.5,136.0 163.8,136.0 Z"
                fill="rgb(255,255,255)" />
            <path d="M226.6,154.6 C235.7,154.2 244.6,157.0 252.3,162.7 L248.6,173.8 C242.8,168.5 235.8,165.7 228.4,165.7 C220.3,165.7 212.6,169.0 206.2,174.9 L200.7,165.7 C208.2,158.9 217.1,155.0 226.6,154.6 Z"
                fill="rgb(255,255,255)" />
            <path d="M163.8,147.1 C185.0,147.1 202.5,162.6 204.4,182.2 C206.7,206.9 185.8,227.0 160.1,224.7 C138.0,222.7 121.1,203.9 123.2,182.2 C125.0,162.4 142.6,147.1 163.8,147.1 Z"
                fill="url(#gradient51)" />
            <path d="M291.3,144.2 C310.6,146.0 325.5,162.1 324.5,181.1 C323.6,198.5 309.2,212.7 291.3,214.4 C269.8,216.4 251.7,201.1 250.7,181.1 C249.5,159.4 268.4,141.9 291.3,144.2 Z"
                fill="url(#gradient52)" />
            <path d="M269.6,162.6 C277.2,162.5 284.1,166.0 289.2,172.4 L277.9,168.5 C278.4,177.7 274.1,184.8 267.9,184.8 C262.3,184.8 258.0,178.8 258.2,170.7 L247.6,174.8 C253.3,167.2 261.1,162.7 269.6,162.6 Z"
                fill="rgb(20,30,36)" opacity="0.1" />
            <path d="M182.7,166.3 C190.5,166.0 197.8,169.3 203.3,175.5 L191.1,172.7 C191.0,182.6 186.0,189.8 179.6,189.4 C173.8,189.1 169.7,182.8 170.3,174.4 L160.8,178.5 C166.5,171.1 174.2,166.6 182.7,166.3 Z"
                fill="rgb(20,30,36)" opacity="0.1" />
        </g>
        <g class="donate-button__image__hover">
            <path d="M307,236 C307.8,232.7 308.4,229.3 309,226 C315.7,223.5 321.4,219.3 326,214 C332.7,206.1 336.8,196.0 339,185 C347.6,201.3 354.4,218.3 359,236 C362.6,250.3 364.7,265.0 365,280 C357.1,273.6 348.7,268.0 340,263 C328.5,256.3 316.4,250.7 304,246 C305.1,242.7 306.1,239.3 307,236 Z"
                fill="rgb(49,110,125)" opacity="0.1" />
            <path d="M307,236 C307.8,232.7 308.4,229.3 309,226 C314.6,223.5 319.7,220.2 324,216 C327.7,212.2 330.8,207.9 333,203 C337.9,213.6 341.9,224.6 345,236 C347.9,247.0 350.0,258.3 351.0,269.8 C343.9,265.1 336.5,260.8 329,257 C320.8,252.8 312.5,249.2 304,246 C305.1,242.7 306.1,239.3 307,236 Z"
                fill="rgb(49,110,125)" opacity="0.1" />
            <path d="M307,236 C307.8,232.7 308.4,229.3 309,226 C311.2,225.0 313.3,223.9 315.4,222.6 C317.8,221.1 320.1,219.5 322.2,217.6 C325.4,224.1 328.0,231.0 330,238 C332.0,245.1 333.3,252.5 334,260 C329.1,257.1 324.1,254.6 319.0,252.2 C314.1,249.9 309.1,247.8 304,246 C305.1,242.7 306.1,239.3 307,236 Z"
                fill="rgb(49,110,125)" opacity="0.1" />
            <path d="M104,240 C100.5,234.2 97.4,228.2 95,222 C92.9,216.8 91.2,211.4 90,206 C83.7,203.6 78.2,199.9 74,195 C70.0,190.4 67.3,185.0 66,179 C52.8,192.7 43.7,209.1 38,227 C29.2,254.1 28.5,284.5 33,315 C41.8,295.7 53.3,278.0 68,264 C78.4,253.9 90.4,245.6 104,240 Z"
                fill="rgb(49,110,125)" opacity="0.1" />
            <path d="M104,240 C100.9,234.8 98.2,229.5 96,224 C93.5,218.1 91.5,212.1 90,206 C85.6,204.2 81.5,201.9 78,199 C75.2,196.7 72.8,194.0 71,191 C59.8,206.2 51.7,223.1 47,241 C42.2,258.7 40.9,277.3 43,296 C49.6,283.9 58.0,273.2 68,264 C78.5,254.1 90.6,246.1 104,240 Z"
                fill="rgb(49,110,125)" opacity="0.1" />
            <path d="M104,240 C100.9,234.8 98.2,229.5 96,224 C93.5,218.1 91.5,212.1 90,206 L83,203 C77.0,212.0 72.3,221.8 69,232 C64.9,244.1 62.7,256.9 62,270 C67.0,263.9 72.7,258.6 79,254 C86.6,248.3 95.0,243.7 104,240 Z"
                fill="rgb(49,110,125)" opacity="0.1" />
            <path d="M104,240 C102.1,237.1 100.4,234.0 99,231 C97.4,227.7 96.1,224.4 95,221 C91.8,225.7 89.1,230.7 87,236 C84.8,241.1 83.1,246.5 82,252 C85.4,249.6 88.9,247.4 92.5,245.4 C96.2,243.4 100.0,241.6 104,240 Z"
                fill="rgb(49,110,125)" opacity="0.1" />
            <path d="M474.3,61.4 L893.9,61.4 C958.5,61.4 1000.1,118.5 999.6,189.0 C999.2,259.9 956.3,317 890.6,317 L462.7,317 C404.2,317 367.6,262.1 367.0,194.6 C366.3,120.7 408.8,61.4 474.3,61.4 Z"
                fill="rgb(49,110,125)" opacity="0.1" />
            <path d="M482.5,72.4 L886.7,72.4 C948.6,72.4 989.1,124.9 988.6,189.6 C988.2,254.6 946.5,307 883.5,307 L471.3,307 C415.3,307 379.6,256.6 379.0,194.7 C378.2,126.9 419.6,72.4 482.5,72.4 Z"
                fill="rgb(49,110,125)" opacity="0.2" />
            <path d="M223,252 C241.3,251.1 259.7,249.5 278,247 C272.1,278.9 253.3,300.9 223,302 C193.0,303.0 172.9,282.9 165,252 C184.3,252.8 203.6,252.8 223,252 Z"
                fill="rgb(215,155,102)" />
            <path d="M186,257 C198.6,257.0 211.3,256.6 224,256 C236.0,255.3 248.0,254.3 260,253 C260.9,252.8 261.7,253.1 262,254 C262.2,254.8 261.8,255.5 261,256 C250.3,265.6 237.5,271.3 224.0,272.0 C211.3,272.7 198.8,268.9 188,261 C186.4,260.8 185.2,260.1 185,259 C184.8,258.1 185.2,257.4 186,257 Z"
                fill="rgb(131,62,62)" />
            <path d="M195,261 C204.6,260.9 214.3,260.7 224,260 C230.0,259.5 236.0,258.9 242.0,258.0 C241.5,259.6 240.5,260.9 239.0,262.0 C234.7,265.0 226.3,265.4 218.0,265.0 C210.1,264.6 202.5,263.0 195,261 Z"
                fill="rgb(255,255,255)" />
        </g>
        <g>
            <path d="M489.2,83.4 L879.9,83.4 C939.6,83.4 979.1,131.1 978.6,189.9 C978.2,248.9 937.6,296.3 876.8,296.3 L478.3,296.3 C424.5,296.3 389.6,250.7 389.0,194.5 C388.2,132.9 428.6,83.4 489.2,83.4 Z"
                fill="rgb(49,110,125)" />
            <path d="M524.6,150.8 C532.7,150.8 540.0,152.9 544.2,157.8 C547.2,161.2 548.5,166.0 548.5,170.9 C548.5,172.9 548.3,174.9 548.0,176.9 L543.9,200.3 C542.6,208.0 539.1,214.7 533.6,219.3 C528.0,224.1 520.5,226.5 512.4,226.5 L481.8,226.5 L495.1,150.8 L524.6,150.8 Z M517.9,167.2 L511.1,167.2 L503.7,210.1 L513.6,210.1 C516.7,210.1 519.4,209.2 521.4,207.4 C523.5,205.3 524.6,202.2 525.2,198.6 L528.2,181.4 C528.5,179.9 528.7,178.5 528.7,177.2 C528.4,171.5 523.8,167.2 517.9,167.2 Z M593.0,150.1 C606.4,151.2 617.1,161.9 618.3,170.8 C618.6,173.3 618.0,175.6 617.6,178.2 L613.9,199.3 C612.3,208.2 608.9,215.9 603.0,220.9 C596.7,226.1 588.2,228.0 579.3,227.9 C570.7,227.9 562.5,226.1 558.1,220.9 C555.1,217.4 554.0,212.6 554.0,207.6 C554.0,204.8 554.3,202.0 554.8,199.3 L558.5,178.2 C561.8,159.6 576.4,148.6 593.0,150.1 Z M582.1,211.7 C585.2,212.0 588.3,211.0 590.6,208.9 C593.1,206.6 594.2,202.9 595.0,198.8 L598.5,178.7 C598.8,177.3 599.0,176.1 598.9,174.9 C598.5,170.5 594.8,166.7 590.2,166.4 C584.2,165.9 578.7,170.8 577.3,178.7 L573.7,198.8 C573.4,200.8 573.0,202.6 573.3,204.3 C574.0,208.1 577.6,211.2 582.1,211.7 Z M693.5,150.8 L680.3,226.5 L661.3,226.5 L648.0,185.1 L640.9,226.5 L621.9,226.5 L635.2,150.8 L654.8,150.8 L667.8,189.5 L674.6,150.8 L693.5,150.8 Z M732.5,226.5 L733.2,210.0 L715.6,210.0 L710.5,226.5 L690.4,226.5 L717.4,150.8 L752.1,150.8 L752.5,226.5 L732.5,226.5 Z M728.2,169.2 L719.9,195.9 L733.7,195.9 L734.8,169.2 L728.2,169.2 Z M831.3,167.2 L805.4,167.2 L795.0,226.5 L776.0,226.5 L786.4,167.2 L760.5,167.2 L763.4,150.8 L834.2,150.8 L831.3,167.2 Z M882.3,226.5 L829.5,226.5 L842.9,150.8 L895.6,150.8 L892.7,167.2 L858.8,167.2 L856.4,181.4 L884.4,181.4 L881.4,197.8 L853.5,197.8 L851.4,210.1 L885.2,210.1 L882.3,226.5 Z"
                fill="rgb(255,255,255)" />
        </g>
    </svg>
    <span class="donate-button__text">Donate</span>
</a>
`;

const cssText = `
.donate-button {
    display: inline-block;
    text-decoration: none;
    width: 100%;
}
.donate-button__text {
    visibility: hidden;
}
.donate-button__image {
    display: inline-block;
    max-width: 25em;
    width: 100%;
}
.donate-button__image__hover {
    opacity: 0;
    transition: opacity 500ms;
}
.donate-button__image:hover .donate-button__image__hover {
    opacity: 1;
}
`;

class DonateMascotElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        const style = html('style', null, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);
    }
}

customElements.define('darkreader-donate-mascot', DonateMascotElement);
