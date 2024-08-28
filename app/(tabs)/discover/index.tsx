import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '@/components/layout/Header'
import publicClient from "@/api/client/public.client"
import { AxiosResponse } from 'axios';
import BannerHome from '@/components/discover/BannerHome';
import NewRelease from '@/components/discover/NewRelease';


interface DataItem {
  sectionType: string; 
  sectionId : string;
  items : any ; 
  title : string;
  
}

const DiscoverScreend = () => {
  const [data, setData] = useState<DataItem[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const fetchData = async ()=>{
      setLoading(true)
      try {
        const response : any = await publicClient.get('/get-home')
        setData(response.items)


      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  },[])


  return (

    <ScrollView>
      {/* banner */}
      <View>
        {loading ? <Text>Loading...</Text> : 
        data.map((item, index) =>{
            const {sectionId , sectionType, items, title} = item
            
            // if (sectionType == 'banner'){
            //   return (
            //     <View key={sectionId}>
            //         <BannerHome data={items} />
            //     </View>
            //   )
            // }

            return (
              <View key={index} style={{display : "flex" , flexDirection :"row" , gap: 20, paddingHorizontal: 10}}>
                {sectionType == "banner" && <BannerHome data={items} />}
                {sectionType == 'new-release' && <NewRelease title={title} data={items}/>}
              </View>
            )

        })

  
        }
      </View>
    </ScrollView>

    
  )
}

export default DiscoverScreend

const styles = StyleSheet.create({})