import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { BackHandler, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const App = () => (
    <SafeAreaView style = {{flex: 1}}>
      <HomeScreen/>
    </SafeAreaView>
);

const HomeScreen = () => (
	<View style = {styles.homeScreen}>
		<Header label = "Trending Woofs"/>
			<Trends/>
		<Header label = "New Woof Posts"/>
			<Posts/>
	</View>
);

const Header = (props) => {
  return (
    <View style = {styles.header}>
      <Text style = {styles.headerText}>
        {props.label}
      </Text>
    </View>
  );
};

const Trends = () => (
  <View style = {styles.trends}>
    <ScrollView 
		horizontal = {true}
		showsHorizontalScrollIndicator = {false}>
			{data.woofs.map((woof) => 
				<Cards 
					key = {woof.id} 
					woofName = {woof.name}
					avatar = {woof.avatar}
				/>
			)}
    </ScrollView>
  </View>

);

const Cards = (props) => {
  return (
    <View style = {styles.cards}>
		<Image 
			source = {{uri: props.avatar}} 
			style = {styles.cardsAvatar}	
		/>
		<Text style = {styles.cardsText} >
			{props.woofName}
		</Text>
	</View>
  );	
};

const Posts = () => {
	return (
		<View style = {styles.posts}>
			<ScrollView
				showsVerticalScrollIndicator = {false}>
					{data.posts.map((eachPost) =>
						<PostCards 
							key = {eachPost.id}
							title = {eachPost.title}
							description = {eachPost.description}
							image = {eachPost.image}
						/>
				)}
			</ScrollView>
		</View>
	);
};
const PostCards = (props) => {
	return (
		<View style = {styles.postCards}>
			<Image 
				source = {{uri: props.image}}
				style = {styles.postImages}
			/>
			<PostText 
				title = {props.title}
				description = {props.description}
			/>
		</View>
	);
};
const PostText = (props) => {
	return (
		<View style = {styles.postTextView}>
			<Text style = {styles.postTextTitle}>
				{props.title}
			</Text>
			<Text 
				styles = {styles.postTextDescription}
				numberOfLines = {2}
				ellipsizeMode='tail'
			>
					{props.description}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: 'flex-start',
	backgroundColor: '#FAF9FA',
  },
  header: {
    flex: 0.05,
	// maxHeight: 10,
    // backgroundColor: 'pink',
    flexDirection: 'row',
	justifyContent:'flex-start',
	alignItems: 'flex-end'

    },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
	// fontFamily: 'Kanit',
	paddingLeft: 10,
	paddingBottom: 3,
  },
  trends: {
    flex: 0.17,
    flexDirection: 'row',
	justifyContent: 'flex-start',
	alignItems: 'center',
	padding: 12,
  },
  cards : {
    backgroundColor: '#FFFFFF',
    width: 78,
    height: 102,
	marginRight: 12,
	borderWidth: 1,
	borderColor: '#E7E3EB',
	borderRadius: 10,
	padding: 5,
	justifyContent: 'space-between',
	alignItems: 'center', 

	overflow: 'visible',
	shadowColor: '#000', // shadow color
	shadowOffset: { width: 0, height: 2 }, // shadow position
	shadowOpacity: 0.25, // shadow opacity
	shadowRadius: 1, // shadow blur radius
  },
  cardsText: {
	color: "#280D5F",
	fontWeight: 'bold',
	paddingTop: 2,
  },
  cardsAvatar: {
	height: 75,
	width: 65,
	borderRadius: 100,
  },
  posts: {
	flex: 0.71,
	// backgroundColor: 'green',
	paddingTop: 20,
	paddingLeft: 20,
	paddingRight: 20,
	alignItems: 'center',

  },
  postCards: {
	width: 330,
	height: 80,
	// backgroundColor: 'pink',
	flexDirection: 'row',
	marginBottom: 20,
  },
  postImages: {
	flex: 1,
	borderRadius: 15,
  },	
  postTextView: {
	flex: 2,
	padding: 5,
  },
  postTextTitle: {
	fontWeight: 'bold',
  },
  postTextDescription: {

  },

  });

const data = {
	woofs: [
		{
		id: 'woof-1', 
		name: 'Rex', 
		avatar: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=648&q=80',
		caretaker: 'Victor Grabarczyk',
		source: 'https://unsplash.com/photos/x5oPmHmY3kQ',
		},
		{
		id: 'woof-2', 
		name: 'Ball', 
		avatar: 'https://images.unsplash.com/photo-1585584114963-503344a119b0?auto=format&fit=crop&h=64&q=80',
		caretaker: 'Tatiana Rodriguez',
		source: 'https://unsplash.com/photos/J40C1k6Fut0',
		},
		{
		id: 'woof-3', 
		name: 'Happy', 
		avatar: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&h=64&q=80',
		caretaker: 'Marliese Streefland',
		source: 'https://unsplash.com/photos/2l0CWTpcChI',
		},
		{
		id: 'woof-4',
		name: 'Fluffy',
		avatar: 'https://images.unsplash.com/photo-1554956615-1ba6dc39921b?auto=format&fit=crop&h=64&q=80',
		caretaker: 'Nick Fewings',
		source: 'https://unsplash.com/photos/rMKXLAIa2OY',
		},
		{
		id: 'woof-5',
		name: 'Spirit',
		avatar: 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?auto=format&fit=crop&h=64&q=80',
		caretaker: 'Jamie Street',
		source: 'https://unsplash.com/photos/uNNCs5kL70Q',
		},
	],
	posts: [
		{
		id: 'post-1',
		image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=967&q=80',
		title: 'Happy Woofs',
		description: 'How to keep your woof health and happy. We\'ve asked some of the best experts out there.',
		caretaker: 'Jamie Street',
		source: 'https://unsplash.com/photos/UtrE5DcgEyg',
		},
		{
		id: 'post-2',
		image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=850&q=80',
		title: 'Woofs & friends',
		description: 'Best friends are important for humans, but also for dogs.',
		caretaker: 'Krista Mangulsone',
		source: 'https://unsplash.com/photos/9gz3wfHr65U',
		},
		{
		id: 'post-3',
		image: 'https://images.unsplash.com/photo-1558947530-cbcf6e9aeeae?auto=format&fit=crop&w=634&q=80',
		title: 'Good Woofs',
		description: 'A good woof is a woof that brings joy. Here are a few tips to let your woof behave.',
		caretaker: 'Olia Nayda',
		source: 'https://unsplash.com/photos/f6v_Q0WXEK8',
		},
		{
		id: 'post-4',
		image: 'https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=1100&q=80',
		title: 'Wild Woofs',
		description: 'In some parts of the world, wild woofs are very common. Learn how to interact in a nice way.',
		caretaker: 'Anoir Chafik',
		source: 'https://unsplash.com/photos/2_3c4dIFYFU',
		},
		{
		id: 'post-5',
		image: 'https://images.unsplash.com/photo-1567014543648-e4391c989aab?auto=format&fit=crop&w=1050&q=80',
		title: 'Sleepy Woofs',
		description: 'Sleeping is just as important for woofs as it is for humans. What are the main things your woof dreams about.',
		caretaker: 'Max Singh',
		source: 'https://unsplash.com/photos/2637Pic9xMw',
		},
		{
		id: 'post-6',
		image: 'https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?auto=format&fit=crop&w=967&q=80',
		title: 'Exploring Woofs',
		description: 'Just sitting in one place is boring for most woofs. How do woofs explore the world?',
		caretaker: 'Jamie Street',
		source: 'https://unsplash.com/photos/wcO2PWLuQ3U',
		},
	],
};

export default App;