<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Skilline Landing Page</title>
	<!-- Tailwind -->
	<script src="https://cdn.tailwindcss.com"></script>
	<script>
		tailwind.config = {
			theme: {
				extend: {
					colors: {
						cream: '#FFF2E1',
						darken: '#2F327D',
					},
					keyframes: {
						floating: {
							'0%, 100%': { transform: 'translateY(0px)' },
							'50%': { transform: 'translateY(8px)' },
						}
					},
					animation: {
						floating: 'floating 3s ease-in-out infinite',
						'floating-4': 'floating 4s ease-in-out infinite',
					}
				}
			}
		}
	</script>
	<!-- Alpine -->
	<script type="module" src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"></script>
	<script nomodule src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine-ie11.min.js" defer></script>
	<!-- AOS -->
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
	<!-- Poppins font -->
	<link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"> 
</head>
<body class="antialiased">
