import React, { useEffect, useState } from 'react'
import { AuthorContainer, ChartContainer, ChartContent, ChartWrapper, Container, DateTimeWrapper, GreetingCard, GreetingWrapper, HomeWrapper, PostItems, PostItemWrapper, ProfileDp, RecentPostWrapper, SpaceBtnContainer, TopCard, TopCardContent, TopCardContentWrapper, TopCardIcon, TotalPostContainer, UserContainer, UserWrapper } from './Home.style'
import {MdOutlineAdd, MdOutlineDateRange} from 'react-icons/md'
import Dp from '../../../images/author.png'
import {TfiWrite} from 'react-icons/tfi'
import { TopCardItemList } from '../../../data/TopcardItems'
import AreaChartComp from '../../../components/chart/AreaChartComp'
import Barchart from '../../../components/chart/Barchart'
import Linecharts from '../../../components/chart/Linecharts'
import UserTable from '../../../components/table/usertable/UserTable'
import Button from '../../../components/clicks/button/Button'
import RecentPost from '../../../components/RecentPost/RecentPost'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function DashboardHome() {

  const navigate = useNavigate();
  const [recentPost, setRecentPost] = useState([])

  const fetchRecentPost = async () =>{
    try {
      const res = await axios.get(process.env.REACT_APP_URL+ '/api/posts');
      console.log(res.data);
      setRecentPost(res.data.slice(0, 5));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchRecentPost();
  }, []);
  

  return (
    <HomeWrapper>
        <GreetingWrapper>
          <GreetingCard>
            <h1>Welcome back</h1>
            <h5>Good Evening !</h5>
          </GreetingCard>

          <DateTimeWrapper>
            <span><MdOutlineDateRange /></span>
            <span>Today: {new Date().toDateString()}</span>
          </DateTimeWrapper>
        </GreetingWrapper>

      <TopCardContent>
        
        <UserWrapper>
          <AuthorContainer>
            <h3>Isah Abdulmumin</h3>
            <p>Writer/Author</p>
          </AuthorContainer>
          <TotalPostContainer>
            <span><p>50</p> Total Post</span>
            <span><p>32</p> Total Shared</span>
          </TotalPostContainer>

      {/* profile dp */}
          <ProfileDp>
            <img src={Dp} alt="" srcset="" />
          </ProfileDp>
        </UserWrapper>


        <TopCardContentWrapper>
            {
              TopCardItemList
              .map((item, i)=>(
                      <TopCard bg={item.bg}>
                          <TopCardIcon>
                            <img src={item.icon} alt="" srcset="" />
                          </TopCardIcon>
                          <h2>{item.count}</h2>
                          <p>{item.title}</p>
                      </TopCard>
              ))
            }
        </TopCardContentWrapper>   
      </TopCardContent>

{/* Charts */}
      <Container>
        <ChartContent>
          <Linecharts/>
        </ChartContent>
        <ChartContent>
          <Barchart/>
        </ChartContent>
      </Container>


      <Container>
        {/* user */}
        <UserContainer>
            <UserTable/>
        </UserContainer>
          
          {/* Recent POST */}
          <RecentPostWrapper>
              <SpaceBtnContainer>
                <h3>Recent Blogs</h3>
                <Button 
                  btnText={'Add New'} 
                  btnColor={'green'} 
                  btnLeftIcon={<MdOutlineAdd />}
                  btnOnClick={()=>navigate('/dashboard')}
                />
              </SpaceBtnContainer>

              <PostItemWrapper>
                {
                  recentPost && recentPost.map((post)=>(
                    <RecentPost key={post?._id} post={post} />
                  ))
                }              
              </PostItemWrapper>
          </RecentPostWrapper>
      </Container>  

    </HomeWrapper>
  )
}

export default DashboardHome


// https://demos.creative-tim.com/purity-ui-dashboard-pro/?_ga=2.54610219.1863943687.1726404927-1621573859.1726404927#/admin/dashboard/default