<script>
	import Card from '$lib/components/Card.svelte';
	import CardContainer from '$lib/components/CardContainer.svelte';

	import luxuryCarImg from '$lib/images/icon-luxury.svg';
	import sedansCarImg from '$lib/images/icon-sedans.svg';
	import suvsCarImg from '$lib/images/icon-suvs.svg';

	const data = [
		{
			carImgSrc: sedansCarImg,
			title: 'sedans',
			paragraph:
				'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
			color: 'brightOrange'
		},
		{
			carImgSrc: suvsCarImg,
			title: 'suvs',
			paragraph:
				'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
			color: 'darkCyan'
		},
		{
			carImgSrc: luxuryCarImg,
			title: 'luxury',
			paragraph:
				'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
			color: 'veryDarkCyan'
		}
	];
</script>

<svelte:head>
	<title>3 Column preview card component</title>
</svelte:head>
<CardContainer>
	{#each data as carCard}
		<Card
			carImgSrc={carCard.carImgSrc}
			title={carCard.title}
			paragraph={carCard.paragraph}
			color={carCard.color}
		/>
	{/each}
</CardContainer>
