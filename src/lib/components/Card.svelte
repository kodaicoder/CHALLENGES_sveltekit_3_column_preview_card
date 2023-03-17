<script>
	// @ts-nocheck
	export let title = 'default_title';
	export let paragraph = 'default_paragraph';
	export let carImgSrc;
	export let color = 'brightOrange';

	const colorVariants = {
		brightOrange: 'bg-brightOrange',
		darkCyan: 'bg-darkCyan',
		veryDarkCyan: 'bg-veryDarkCyan'
	};
</script>

<div class="grid p-10 gap-10 {`${colorVariants[color]}`}">
	<img src={carImgSrc} alt={title} />
	<p class=" font-bigShouldersDisplay font-bold text-4xl text-veryLightGray">
		{title.toUpperCase()}
	</p>
	<p class="font-light text-base">{paragraph}</p>
	<button
		class="bg-veryLightGray py-2 w-2/3 mt-10 rounded-full border-2 text-black mix-blend-screen transition-all duration-200
	hover:bg-black hover:text-veryLightGray ">Learn More</button
	>
</div>
