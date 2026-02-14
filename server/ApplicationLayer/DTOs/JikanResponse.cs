using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace ApplicationLayer.DTOs 
{
    // 1. The Root Response (The Envelope)
    public class JikanResponse
    {
        [JsonPropertyName("pagination")]
        public JikanPagination Pagination { get; set; }

        [JsonPropertyName("data")]
        public List<JikanAnime> Data { get; set; }
    }

    // 2. Pagination Details (Good to have for infinite scroll later)
    public class JikanPagination
    {
        [JsonPropertyName("last_visible_page")]
        public int LastVisiblePage { get; set; }

        [JsonPropertyName("has_next_page")]
        public bool HasNextPage { get; set; }
    }

    // 3. The Main Anime Object
    public class JikanAnime
    {
        [JsonPropertyName("mal_id")]
        public int MalId { get; set; }

        [JsonPropertyName("url")]
        public string Url { get; set; }

        [JsonPropertyName("title")]
        public string Title { get; set; } // The default title (usually Romaji)

        [JsonPropertyName("title_english")]
        public string? TitleEnglish { get; set; } // Nullable (might not have one)

        [JsonPropertyName("images")]
        public JikanImages Images { get; set; }

        [JsonPropertyName("trailer")]
        public JikanTrailer Trailer { get; set; }

        [JsonPropertyName("type")]
        public string Type { get; set; } // TV, Movie, OVA

        [JsonPropertyName("episodes")]
        public int? Episodes { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; } // "Finished Airing", "Currently Airing"

        [JsonPropertyName("aired")]
        public JikanAired Aired { get; set; }

        [JsonPropertyName("score")]
        public double Score { get; set; }

        [JsonPropertyName("rank")]
        public int? Rank { get; set; }

        [JsonPropertyName("synopsis")]
        public string Synopsis { get; set; }
        [JsonPropertyName("year")]
        public int? Year { get; set; }

        // Shared Lists (Genres, Studios, Producers)
        [JsonPropertyName("genres")]
        public List<JikanResource> Genres { get; set; }

        [JsonPropertyName("studios")]
        public List<JikanResource> Studios { get; set; }
    }

    // 4. Image Wrappers
    public class JikanImages
    {
        [JsonPropertyName("jpg")]
        public JikanImageSet Jpg { get; set; }

        [JsonPropertyName("webp")]
        public JikanImageSet Webp { get; set; }
    }

    public class JikanImageSet
    {
        [JsonPropertyName("image_url")]
        public string ImageUrl { get; set; }

        [JsonPropertyName("large_image_url")]
        public string LargeImageUrl { get; set; }
    }

    // 5. Trailer Information
    public class JikanTrailer
    {
        [JsonPropertyName("youtube_id")]
        public string? YoutubeId { get; set; }

        [JsonPropertyName("embed_url")]
        public string? EmbedUrl { get; set; }
    }

    // 6. Date Information
    public class JikanAired
    {
        [JsonPropertyName("from")]
        public DateTime? From { get; set; }

        [JsonPropertyName("to")]
        public DateTime? To { get; set; }

        [JsonPropertyName("string")]
        public string String { get; set; } // e.g. "Sep 29, 2023 to Mar 22, 2024"
    }

    // 7. Generic Resource (Used for Genres, Studios, Producers, Licensors)
    // All of them follow the format: { mal_id, type, name, url }
    public class JikanResource
    {
        [JsonPropertyName("mal_id")]
        public int MalId { get; set; }

        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }
    }
}