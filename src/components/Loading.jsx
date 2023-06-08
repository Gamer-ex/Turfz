import React from 'react'
import {Stack, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
export const Loading = () => {
  return (
    <div id='loading' style={{
        display:"grid",
        gap:"20px"
    }}>
        <Stack>
         <Skeleton height='200px' width={"30%"} />
         <Skeleton height='20px' width={"35%"}/>
         <Skeleton height='20px' width={"80%"} />
         <Skeleton height='50px' width={"10%"}/>
        </Stack>
        <Stack>
         <Skeleton height='200px' width={"30%"} />
         <Skeleton height='20px' width={"35%"}/>
         <Skeleton height='20px' width={"80%"} />
        </Stack>
        <Stack>
         <Skeleton height='200px' width={"30%"} />
         <Skeleton height='20px' width={"35%"}/>
         <Skeleton height='20px' width={"80%"} />
        </Stack>
        <Stack>
         <Skeleton height='200px' width={"30%"} />
         <Skeleton height='20px' width={"35%"}/>
         <Skeleton height='20px' width={"80%"} />
        </Stack>
        <Stack>
         <Skeleton height='200px' width={"30%"} />
         <Skeleton height='20px' width={"35%"}/>
         <Skeleton height='20px' width={"80%"} />
        </Stack>
    </div>
  )
}
