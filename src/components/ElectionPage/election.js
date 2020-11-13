import React, { Component } from 'react'
import TableauReport from 'tableau-react';
 
const SimpleReport = props => (
  <TableauReport
    url="https://prod-useast-b.online.tableau.com/t/myportfoliosite/views/FinalExamDATA/Sheet3?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"

  />
)

class Election extends Component {
    render() {
        return (
            <>
              <TableauReport
                url="https://prod-useast-b.online.tableau.com/t/myportfoliosite/views/FinalExamDATA/Sheet3?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
            />
                          <TableauReport
                url="https://prod-useast-b.online.tableau.com/t/myportfoliosite/views/FinalExamDATA/Sheet1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
            />
                          <TableauReport
                url="https://prod-useast-b.online.tableau.com/t/myportfoliosite/views/FinalExamDATABubbleMap/Sheet2?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
            />
                          <TableauReport
                url="https://prod-useast-b.online.tableau.com/t/myportfoliosite/views/FinalExamDATABubbleMap/Sheet4?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
            />
                          <TableauReport
                url="https://prod-useast-b.online.tableau.com/t/myportfoliosite/views/AgeTreeMapFinal/Sheet1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
            />
            </>

        )
    }
}

export default Election;
