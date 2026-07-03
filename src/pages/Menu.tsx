import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Star, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Menu.css';

const categories = [
  "Tout",
  "Entrées Froides",
  "Entrées Chaudes",
  "Couscous",
  "Plats Traditionnels",
  "Grillades",
  "Desserts",
  "Boissons"
];

export const menuItems = [
  { id: 1, name: "Salade Méchouia", category: "Entrées Froides", price: "450 DA", img: "/salade_mechouia_1783098597214.png", rating: 4.8, desc: "Poivrons et tomates grillés au feu de bois, huile d'olive vierge.",
    story: "Une salade estivale par excellence, la Méchouia puise ses origines dans les traditions berbères et arabes. Les légumes sont grillés patiemment sur des braises pour leur donner ce goût fumé si caractéristique avant d'être écrasés et arrosés d'une huile d'olive de première pression à froid.",
    ingredients: ["Poivrons verts grillés", "Tomates rôties", "Ail pilonné", "Huile d'olive vierge extra", "Olives noires", "Coriandre fraîche"] },
  { id: 2, name: "Bourek Viande", category: "Entrées Chaudes", price: "250 DA", img: "/bourek_viande_1783098608769.png", rating: 4.9, desc: "Cigare croustillant farci à la viande hachée épicée et aux herbes.",
    story: "Incontournable des tables de ramadan, le Bourek est l'héritage de l'influence ottomane en Algérie. Les feuilles de brick (diouls) sont étalées à la main sur de grandes plaques de cuivre selon un savoir-faire ancestral, garantissant un croustillant parfait.",
    ingredients: ["Feuilles de brick (Diouls)", "Viande de boeuf hachée", "Oignons caramélisés", "Persil plat", "Cannelle", "Poivre noir"] },
  { id: 3, name: "Couscous Royal", category: "Couscous", price: "3,500 DA", img: "/hero_couscous_1783095025547.png", rating: 5.0, desc: "Semoule fine, agneau braisé, poulet fermier, merguez artisanales.",
    story: "Le Couscous Royal est le joyau de la couronne de la gastronomie algérienne. Transmise de génération en génération, la recette de notre Couscous vient directement des montagnes de Kabylie. La semoule est roulée à la main avec patience, tandis que le bouillon mijote doucement avec un mélange secret de 12 épices.",
    ingredients: ["Semoule de blé dur extra-fine", "Viande d'agneau (épaule)", "Poulet fermier", "Merguez artisanales", "Navets, Carottes, Courgettes", "Ras el Hanout, Safran", "Smen (Beurre clarifié)"] },
  { id: 4, name: "Tajine Lahlou", category: "Plats Traditionnels", price: "2,800 DA", img: "/tajine_dish_1783095036731.png", rating: 4.7, desc: "Viande fondante, pruneaux, amandes grillées, abricots secs.",
    story: "Plat sucré-salé de fête par excellence, le Tajine Lahlou (le tagine doux) est servi lors des mariages et du mois de Ramadan. Symbole de prospérité et de douceur, il combine la tendreté de la viande mijotée avec la richesse des fruits confits.",
    ingredients: ["Morceaux d'agneau tendre", "Pruneaux d'Agen", "Abricots secs", "Amandes émondées grillées", "Miel pur", "Cannelle en bâton", "Eau de fleur d'oranger"] },
  { id: 5, name: "Mix Grillades", category: "Grillades", price: "4,200 DA", img: "/grilled_meat_1783095059633.png", rating: 4.9, desc: "Assortiment de viandes marinées aux épices, grillées au feu de bois.",
    story: "Les grillades font partie de la tradition festive algérienne. Marinées pendant des heures dans un mélange d'épices, d'huile d'olive et de citron, nos viandes sont saisies rapidement sur un feu de charbon de bois pour conserver tout leur jus et développer une croûte savoureuse.",
    ingredients: ["Côtelettes d'agneau", "Brochettes de poulet", "Merguez maison", "Marinade au cumin et coriandre", "Huile d'olive vierge", "Gros sel marin"] },
  { id: 6, name: "Baklava", category: "Desserts", price: "600 DA", img: "/baklava_algerienne_1783098618543.png", rating: 4.6, desc: "Feuilleté aux amandes et noix, miel pur.",
    story: "La Baklava algérienne diffère par sa pâte travaillée longuement à la machine pour obtenir des feuilles transparentes, et par sa farce exclusive aux amandes ou noix, sans pistaches, fortement parfumée à la fleur d'oranger, héritage direct de la Régence d'Alger.",
    ingredients: ["Pâte feuilletée ultrafine", "Amandes moulues", "Cerneaux de noix", "Miel de montagne", "Eau de fleur d'oranger", "Smen (Beurre fondu)"] },
  { id: 7, name: "Thé à la Menthe", category: "Boissons", price: "350 DA", img: "/mint_tea_1783095094129.png", rating: 4.9, desc: "Thé vert traditionnel à la menthe fraîche et pignons de pin.",
    story: "Le rituel du thé (Atay) est le symbole de l'hospitalité maghrébine. Préparé selon la méthode traditionnelle en versant le liquide de très haut pour l'oxygéner, il forme une belle mousse à la surface du verre, signe d'un thé réussi.",
    ingredients: ["Thé vert Gunpowder", "Menthe verte fraîche (Nana)", "Sucre candi", "Pignons de pin torréfiés", "Eau pure bouillante"] },
  { id: 8, name: "Chorba Frik", category: "Entrées Chaudes", price: "800 DA", img: "/chorba_frik_1783098628097.png", rating: 4.8, desc: "Soupe traditionnelle au blé concassé, viande et coriandre.",
    story: "Reine des soupes algériennes, la Chorba Frik tient sa particularité du 'Frik', un blé vert récolté avant maturité puis concassé et torréfié. Cette soupe onctueuse et veloutée est le point de départ de tout festin traditionnel.",
    ingredients: ["Frik (blé vert concassé)", "Viande d'agneau en dés", "Tomates fraîches concassées", "Céleri et menthe", "Coriandre fraîche (Kezbour)", "Pois chiches"] },
  { id: 9, name: "Chakhchoukha", category: "Plats Traditionnels", price: "2,400 DA", img: "/chakhchoukha_1783100219594.png", rating: 4.9, desc: "Galette émiettée dans une sauce rouge épicée, viandes et pois chiches.",
    story: "Originaire des régions de l'Est et du Sud de l'Algérie, la Chakhchoukha est le plat de l'hospitalité par excellence. La galette de semoule fine (Rougag) est préparée puis déchirée à la main en petits morceaux avant de s'imbiber d'une sauce corsée.",
    ingredients: ["Galette de semoule (Rougag)", "Poulet et Viande de mouton", "Oignons rouges", "Tomates mûres", "Piments forts", "Pois chiches", "Mélange d'épices"] },
  { id: 10, name: "Rechta Algéroise", category: "Plats Traditionnels", price: "2,200 DA", img: "/rechta_1783100231695.png", rating: 4.8, desc: "Nouilles fines artisanales, sauce blanche, poulet rôti et navets.",
    story: "Plat emblématique de la capitale Alger, la Rechta célèbre les fêtes religieuses comme le Mouloud. Ses pâtes fraîches, délicatement aromatisées à la cannelle, accompagnées d'une sauce blanche veloutée et de navets, incarnent le raffinement algérois.",
    ingredients: ["Pâtes fraîches artisanales (Rechta)", "Poulet fermier", "Navets blancs", "Pois chiches", "Cannelle en poudre et en bâton", "Oignons", "Smen"] },
  { id: 11, name: "Mhajeb", category: "Entrées Chaudes", price: "350 DA", img: "/mhajeb_1783100240940.png", rating: 4.9, desc: "Crêpe de semoule feuilletée, farcie d'une confit de tomates et oignons.",
    story: "Ce classique de la street food algérienne demande une dextérité remarquable. La pâte de semoule est étirée jusqu'à devenir translucide avant d'être farcie d'une chakchouka épicée et pliée en carré pour une cuisson sur tôle chaude.",
    ingredients: ["Pâte de semoule de blé dur", "Tomates mûres", "Oignons émincés", "Piment (Harissa)", "Huile végétale", "Poivre noir"] },
  { id: 12, name: "Dolma Algérienne", category: "Plats Traditionnels", price: "1,900 DA", img: "/dolma_1783100250200.png", rating: 4.7, desc: "Légumes farcis à la viande hachée, mijotés dans une sauce blanche onctueuse.",
    story: "Héritage direct des influences ottomanes d'El Djazaïr, la Dolma a été adaptée au palais local. Les légumes sont soigneusement évidés et farcis d'une préparation moelleuse à la viande et au riz, avant de mijoter dans une sauce à base de pois chiches.",
    ingredients: ["Courgettes et pommes de terre", "Viande hachée de boeuf", "Riz rond", "Persil et menthe", "Pois chiches", "Oignons", "Cannelle", "Œuf (liant)"] },
  { id: 13, name: "Tajine Zitoun", category: "Plats Traditionnels", price: "2,100 DA", img: "/tajine_ezzitoun.png", rating: 4.9, desc: "Plat mijoté aux olives vertes, poulet fondant et carottes.",
    story: "Un classique indémodable des repas de famille. Le Tajine aux olives (Zitoun) tire son caractère des olives vertes longuement dessalées, qui mijotent avec des rondelles de carottes et du poulet pour créer un équilibre parfait entre l'acidité et la douceur.",
    ingredients: ["Olives vertes dénoyautées", "Poulet ou Veau", "Carottes en rondelles", "Champignons frais", "Coriandre fraîche", "Safran et Curcuma", "Ail"] },
  { id: 14, name: "Makroud", category: "Desserts", price: "400 DA", img: "/makroud.png", rating: 4.8, desc: "Losanges de semoule dorés aux dattes, trempés dans le miel.",
    story: "Roi des gâteaux algériens, le Makroud est le fruit d'une longue préparation. Le roulé de semoule farci à la pâte de datte (ghers) est découpé en losanges, frit jusqu'à obtenir une couleur dorée éclatante, puis plongé dans un bain de miel parfumé.",
    ingredients: ["Semoule moyenne", "Pâte de dattes (Ghers)", "Miel pur", "Eau de fleur d'oranger", "Huile de friture", "Cannelle et Clou de girofle"] },
  { id: 15, name: "Kalb El Louz", category: "Desserts", price: "350 DA", img: "/kalb_alouz.png", rating: 4.9, desc: "Gâteau de semoule et amandes au sirop de fleur d'oranger.",
    story: "Signifiant littéralement 'Cœur d'amande', ce dessert est l'astre des soirées ramadanesques. La semoule est mélangée au beurre et repose pour absorber toutes les saveurs avant d'être cuite et arrosée abondamment de sirop de miel dès sa sortie du four.",
    ingredients: ["Grosse semoule", "Amandes concassées", "Beurre fondu", "Sucre en poudre", "Sirop à l'eau de fleur d'oranger", "Amandes entières (décoration)"] },
  { id: 16, name: "Brik à l'Œuf", category: "Entrées Chaudes", price: "300 DA", img: "/brik_a_loeuf.png", rating: 4.8, desc: "Feuille de brick croustillante avec un œuf coulant et persil.",
    story: "L'art du Brik réside dans sa cuisson express. La feuille de dioul est farcie, garnie d'un œuf cru, repliée en triangle et frite en quelques secondes pour que la pâte soit dorée et croustillante, tout en gardant le jaune de l'œuf parfaitement coulant.",
    ingredients: ["Feuille de brick artisanale", "Œuf frais", "Pommes de terre écrasées", "Persil haché", "Oignon râpé", "Poivre noir", "Quartier de citron"] },
];

const Menu = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === "Tout" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="menu-page">
      <div className="page-header">
        <div className="container text-center">
          <h1 className="page-title">Notre Carte</h1>
          <div className="divider"></div>
          <p className="page-desc">Découvrez une sélection exquise de mets traditionnels, préparés avec les ingrédients les plus nobles.</p>
        </div>
      </div>

      <div className="container">
        <div className="menu-controls glass">
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Rechercher un plat..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="categories-tabs">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="menu-grid">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="menu-item-card glass"
              >
                <div className="menu-item-img">
                  <img src={item.img} alt={item.name} />
                  <button 
                    className="add-to-cart-btn" 
                    aria-label="Ajouter au panier"
                    onClick={() => addToCart({
                      id: item.id,
                      name: item.name,
                      price: parseInt(item.price.replace(/[^\d]/g, '')),
                      quantity: 1,
                      img: item.img
                    })}
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <div className="menu-item-info">
                  <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p className="desc">{item.desc}</p>
                  <div className="menu-item-footer">
                    <span className="category-tag">{item.category}</span>
                    <div className="rating">
                      <Star size={14} fill="var(--color-accent-gold)" color="var(--color-accent-gold)" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                  <div className="menu-item-action" style={{ marginTop: '1rem' }}>
                    <Link to={`/dish/${item.id}`} className="card-link">Découvrir <ArrowRight size={16} /></Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredItems.length === 0 && (
          <div className="no-results text-center">
            <h3>Aucun plat ne correspond à votre recherche.</h3>
            <p>Veuillez essayer avec d'autres mots-clés.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
